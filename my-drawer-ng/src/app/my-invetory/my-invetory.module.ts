import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MyInventoryRoutingModule } from "./my-invetory-routing.module";
import { MyInventoryComponent } from "./my-invetory.component";

@NgModule({
    imports: [NativeScriptCommonModule, MyInventoryRoutingModule],
    declarations: [MyInventoryComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class MyInventoryModule {}
