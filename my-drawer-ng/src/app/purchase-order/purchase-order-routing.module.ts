import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { PurchaseOrderComponent } from "./purchase-order.component";

const routes: Routes = [
    { path: "", component: PurchaseOrderComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class PurchaseOrderRoutingModule { }
