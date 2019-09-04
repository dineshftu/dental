import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MainInventoryComponent } from "./main-invetory.component";

const routes: Routes = [
    { path: "", component: MainInventoryComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MainInventoryRoutingModule { }
