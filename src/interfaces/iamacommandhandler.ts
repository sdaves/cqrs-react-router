import {IAmACommand} from "./iamacommand";
import {IDomainService} from "../idomainservice";

export interface IAmACommandHandler{
    commandNames: string[];

    handle(command: IAmACommand, domainService: IDomainService, callback: (command: IAmACommand) => void): void;
}

// Symbol used during runtime for dependency injection
export const IAmACommandHandler = Symbol('IAmACommandHandler')
