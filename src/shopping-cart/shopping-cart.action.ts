import { Injectable } from "@angular/core";
import { Dispatcher } from "../event/events.module";

@Injectable()
export class ShoppingCartActions {
    constructor(
        private _dispatcher: Dispatcher,
    ) {
    }

    loadShoppingCart(orderId: string) {

    }

    addproductToShoppingCart(productId: string) {

    }

}