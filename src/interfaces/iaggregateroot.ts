import { IAmADomainEvent } from "../iamadomainevent";
import { IEventStore } from "../ieventstore";

export interface IAggregateRoot{
    ID: string;
    attachEventStore(eventStore: IEventStore): void;
    storeEvent(event: IAmADomainEvent): void;
    applyEvent(event: IAmADomainEvent): void;
}
