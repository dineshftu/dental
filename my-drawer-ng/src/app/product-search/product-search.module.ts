import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ProductSearchRoutingModule } from "./product-search-routing.module";
import { ProductSearchComponent } from "./product-search.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    imports: [NativeScriptCommonModule, NativeScriptFormsModule, ProductSearchRoutingModule],
    declarations: [ProductSearchComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ProductSearchModule { }
