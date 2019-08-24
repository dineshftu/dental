import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PurchaseOrderRoutingModule } from "./purchase-order-routing.module";
import { PurchaseOrderComponent } from "./purchase-order.component";

@NgModule({
    imports: [NativeScriptCommonModule, PurchaseOrderRoutingModule],
    declarations: [PurchaseOrderComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class PurchaseOrderModule {}
