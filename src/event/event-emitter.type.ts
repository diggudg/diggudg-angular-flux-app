import { actionTypes } from './event-types.constant';
import { Action } from './action.type';
import { Subject, SubscriptionLike } from "rxjs";
export class EventEmitter<T> {
    private subject = new Subject<T>();

    addListener(onNext: (value?: T) => void): SubscriptionLike {

        return this.subject.subscribe(onNext);
    }

    emit(value?: T): void {

        try {
            value = value ? value : <any>new Action('', null);
            this.subject.next(value);

        } catch (e) {
            this.subject.next(<any>new Action(actionTypes.EXCEPTION_THROWN, { exception: e, correlationId: '' }));

            throw e;
        }

        this.logTypeOfEvent(value);
    }

    dispose(): void {
        this.subject.unsubscribe();
    }
    private logTypeOfEvent(value?: T) {
        try {
            var type = (<any>(value || {})).type || '';

            if (type) {
                console.log(`Emitted ${type}`);
            }
        } catch (e) {
            //Supress
        }

    }
}