import { IAmADomainEvent } from "./iamadomainevent";
import { IEventStore } from "./ieventstore";

export interface IAggregateRoot{
    ID: string;
    attachEventStore(eventStore: IEventStore): void;
    storeEvent(event: IAmADomainEvent): void;
    applyEvent(event: IAmADomainEvent): void;
}

// Symbol used during runtime for dependency injection
export const IAggregateRoot = Symbol('IAggregateRoot')
