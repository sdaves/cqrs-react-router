export interface IAmACommand{

    name: string;

}

// Symbol used during runtime for dependency injection
export const IAmACommand = Symbol('IAmACommand')
