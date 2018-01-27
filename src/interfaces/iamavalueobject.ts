export interface IAmAValueObject<T>{

    equals(other: T): boolean;

}

// Symbol used during runtime for dependency injection
export const IAmAValueObject = Symbol('IAmAValueObject')
