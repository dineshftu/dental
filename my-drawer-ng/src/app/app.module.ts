import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchSupplierComponent } from "./search-supplier/search-supplier.component";
import { DatePickerComponent } from "./date-picker/date-picker.component";
import { AcceptTransferComponent } from "./accept-transfer/accept-transfer.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ReturnItemComponent } from "./return-item/return-item.component"
@NgModule({
    bootstrap: [AppComponent],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule, NativeScriptFormsModule, NativeScriptCommonModule],
    declarations: [
        AppComponent,
        SearchSupplierComponent,
        DatePickerComponent,
        AcceptTransferComponent,
        ReturnItemComponent
    ],
    entryComponents: [
        SearchSupplierComponent,
        DatePickerComponent,
        AcceptTransferComponent,
        ReturnItemComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
