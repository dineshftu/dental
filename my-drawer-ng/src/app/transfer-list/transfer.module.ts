import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TransferRoutingModule as TransferListRoutingModule } from "./transfer-routing.module";
import { TransferListComponent } from "./transfer.component";

@NgModule({
    imports: [NativeScriptCommonModule, TransferListRoutingModule],
    declarations: [TransferListComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class TransferListModule {}
