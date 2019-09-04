import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CustomerRegistraionComponent } from "./customer-registraion.component";

const routes: Routes = [{ path: "", component: CustomerRegistraionComponent }];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CustomerRegistraionRoutingModule {}
