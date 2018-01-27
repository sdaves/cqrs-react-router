import {IAggregateRoot} from "../interfaces/iaggregateroot";
import {IEventStore} from "../interfaces/ieventstore";
import {IDomainService} from "../interfaces/idomainservice";
import {IAmADomainEvent} from "../interfaces/iamadomainevent";

export class DomainService implements IDomainService{

    private _aggregateRoots: IAggregateRoot[] = [];
    private _eventStore: IEventStore;

    constructor(eventStore: IEventStore){
        this._eventStore = eventStore;
    }

    getAggregateRoot<T implements IAggregateRoot>(c: {new(id?: string): T; }, callback: (aggregateRoot: T) => void, id?: string){
        var self = this;
        var similarAggregateRoots = self._aggregateRoots.filter((ar) => {
            return ar.ID === id;
        });
        if(similarAggregateRoots.length == 0){
            var newAggregateRoot = new c(id);
            newAggregateRoot.attachEventStore(self._eventStore);
            
            // replay all actions for this Aggregate Root in the action store
            self._eventStore.getEventsForID(id, (actions) => {
                actions.forEach((action) => newAggregateRoot.applyEvent(action)); 
            });
            
            self._aggregateRoots.push(newAggregateRoot);
            callback(<T>newAggregateRoot);
            return;
        }
        callback(<T>similarAggregateRoots[0]);
    }

    applyEventToAllAggregates(event: IAmADomainEvent){
        this._aggregateRoots.forEach((ar) => {
            ar.applyEvent(event);
        })
    }

    clearAggregateRoots(){
        this._aggregateRoots = [];
    }
}
