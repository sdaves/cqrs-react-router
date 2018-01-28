import {IAmACommand} from "./iamacommand";
import {IDomainService} from "./idomainservice";
import {IView} from "./iview";

export interface IAmACommandHandler{
    commandNames: string[];
    handle(
        command: IAmACommand, 
        domainService: IDomainService, 
        callback: (command: IAmACommand) => void, 
        getViewByName?: (name: string, viewCallBack: (view: IView) => void) => void
    ): void;
}

// Symbol used during runtime for dependency injection
export const IAmACommandHandler = Symbol('IAmACommandHandler');
