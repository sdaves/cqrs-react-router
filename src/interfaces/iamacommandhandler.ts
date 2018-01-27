import {IAmACommand} from "./iamacommand";
import {IDomainService} from "../idomainservice";

export interface IAmACommandHandler{
    commandNames: string[];

    handle(command: IAmACommand, domainService: IDomainService, callback: (command: IAmACommand) => void): void;
}
