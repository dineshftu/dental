import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MaintenanceRoutingModule } from "./maintenance-routing.module";
import { MaintenanceComponent } from "./maintenance.component";

@NgModule({
    imports: [NativeScriptCommonModule, MaintenanceRoutingModule],
    declarations: [MaintenanceComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class MaintenanceModule {}
