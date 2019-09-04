import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MyInventoryComponent } from "./my-invetory.component";

const routes: Routes = [
    { path: "", component: MyInventoryComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MyInventoryRoutingModule { }
