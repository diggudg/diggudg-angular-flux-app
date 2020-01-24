import { Injectable } from '@angular/core';

import { IAction } from './action.type';

@Injectable({
    providedIn: EventsModule
})
export class Dispatcher extends EventEmitter<IAction> {
}
