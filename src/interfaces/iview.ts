import {IAmADomainEvent} from "./iamadomainevent";

export interface IView {
   name: string;

   handle(event: IAmADomainEvent);
}
