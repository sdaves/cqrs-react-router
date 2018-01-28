import {IAmADomainEvent} from "./iamadomainevent";

export interface IView {
   name: string;

   handle(event: IAmADomainEvent);
}

// Symbol used during runtime for dependency injection
export const IView = Symbol('IView');
