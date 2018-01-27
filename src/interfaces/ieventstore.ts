import {IAmADomainEvent} from "./iamadomainevent";
import {IClockDate} from "./iclockdate";

export interface IEventStore{
    storeEvent(event: IAmADomainEvent): void;
    replayEvents(finalTime?: IClockDate, millisecondsInterval?: number, hardReplay: boolean = false): void;
    replayEventsUpTo(domainEvent: IAmADomainEvent, millisecondsInterval?: number, hardReplay: boolean = false, inclusive: boolean = true): void;
    onEventStored(callback: (event: IAmADomainEvent) => void): void;
    removeOnEventStoredEvent(callback: (event: IAmADomainEvent) => void): void;
    clearOnEventStoredEvents(): void;
    getEventsForID(id: string, callback: (events: IAmADomainEvent[]) => void): void;
    getAllEvents(): IAmADomainEvent[];
}

// Symbol used during runtime for dependency injection
export const IEventStore = Symbol('IEventStore')
