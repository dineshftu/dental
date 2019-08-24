import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MaintenanceComponent } from "./maintenance.component";

const routes: Routes = [{ path: "", component: MaintenanceComponent }];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MaintenanceRoutingModule {}
