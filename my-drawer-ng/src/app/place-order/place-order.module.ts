import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PlaceOrderRoutingModule } from "./place-order-routing.module";
import { PlaceOrderComponent } from "./place-order.component";

@NgModule({
    imports: [NativeScriptCommonModule, PlaceOrderRoutingModule],
    declarations: [PlaceOrderComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class PlaceOrderModule {}
