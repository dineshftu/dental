import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CustomerRegistraionRoutingModule } from "./customer-registraion-routing.module";
import { CustomerRegistraionComponent } from "./customer-registraion.component";

@NgModule({
    imports: [NativeScriptCommonModule, CustomerRegistraionRoutingModule],
    declarations: [CustomerRegistraionComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class CustomerRegistraionModule {}
