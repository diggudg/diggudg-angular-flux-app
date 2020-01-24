export interface IAction {
    type: string;
    data?: any;
}

export class Action<T> implements IAction {
    constructor(public type: string, public data?: T) { }
}