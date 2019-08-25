import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchSupplierComponent } from "./search-supplier/search-supplier.component";
import { DatePickerComponent } from "./date-picker/date-picker.component";
@NgModule({
    bootstrap: [AppComponent],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [AppComponent, SearchSupplierComponent, DatePickerComponent],
    entryComponents: [SearchSupplierComponent, DatePickerComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
