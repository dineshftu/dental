import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MainInventoryRoutingModule } from "./main-invetory-routing.module";
import { MainInventoryComponent } from "./main-invetory.component";

@NgModule({
    imports: [NativeScriptCommonModule, MainInventoryRoutingModule],
    declarations: [MainInventoryComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class MainInventoryModule {}
