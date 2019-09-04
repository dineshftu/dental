import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { PlaceOrderComponent } from "./place-order.component";

const routes: Routes = [{ path: "", component: PlaceOrderComponent }];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class PlaceOrderRoutingModule {}
