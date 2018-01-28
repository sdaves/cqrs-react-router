import {IAmADomainEvent} from "../interfaces/iamadomainevent";
import {IView} from "../interfaces/iview";

export abstract class View implements IView {

    abstract name: string;

    abstract handle(event: IAmADomainEvent);
}
