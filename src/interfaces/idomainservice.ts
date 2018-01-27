import {IAggregateRoot} from "../iaggregateroot";
import {IAmADomainEvent} from "../iamadomainevent";

export interface IDomainService{
    getAggregateRoot<T implements IAggregateRoot>(c: {new(id?: string): T; }, callback: (aggregateRoot: T) => void, id?: string): void;
    applyEventToAllAggregates(event: IAmADomainEvent): void;
    clearAggregateRoots(): void;
}

// Symbol used during runtime for dependency injection
export const IDomainService = Symbol('IDomainService')
