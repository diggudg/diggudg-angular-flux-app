import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Action } from './action.type';
import { Dispatcher } from './dispatcher.type';
export * from './action.type';
export * from './event-emitter.type';
export * from './dispatcher.type';
export * from './event-types.constant';
export * from './event-types.constant';
@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        Dispatcher
    ],
    declarations: [
    ],
    exports: [
    ]
})
export class EventsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: EventsModule,
            providers: [],

        };
    }
}