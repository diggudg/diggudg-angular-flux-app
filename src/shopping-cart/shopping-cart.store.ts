import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { IProduct } from "./IProduct.type";
import { EventEmitter, Dispatcher, Action, IAction } from "../event/events.module";
import { ShoppingCartActionTypes } from "./shopping-cart.action.type";

@Injectable()
export class ShoppingCartStore extends EventEmitter<string> {
    private _product = new Product();
    private _order: any;
    constructor(private _dispatcher: Dispatcher) {
        super();
        this._dispatcher.addListener((action: IAction) => {

            if (action.type === ShoppingCartActionTypes.PRODUCT_ADDED) {

                this.handleOrderDetailsLoaded(<Action<IProduct>>action);
                this.emit();
            }
        });

    }

    getProductAdded() {
        return this._product;
    }

    private handleOrderDetailsLoaded(action: Action<IProduct>): void {

        this._product = action.data;

        this.emit(action.type);
    }

}