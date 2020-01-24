import { Injectable } from '@angular/core';

import { EventEmitter } from './event-emitter.type';
import { IAction } from './action.type';
import { EventsModule } from './events.module';

@Injectable({
    providedIn: EventsModule
})
export class Dispatcher extends EventEmitter<IAction> {
}
