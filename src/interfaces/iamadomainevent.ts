import {IClockDate} from "../iclockdate";

export interface IAmADomainEvent{

    name: string;
    aggregateID: string;
    created?: IClockDate;

}

// Symbol used during runtime for dependency injection
export const IAmADomainEvent = Symbol('IAmADomainEvent')
