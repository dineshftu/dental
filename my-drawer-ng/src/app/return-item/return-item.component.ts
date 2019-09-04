import {
    Component,
    EventEmitter,
    OnInit,
    ViewContainerRef
} from "@angular/core";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular";
import { SearchSupplierComponent } from "../search-supplier/search-supplier.component";
import { DatePickerComponent } from "../date-picker/date-picker.component";
import { ModalDialogParams, RouterExtensions } from "nativescript-angular";
import { action } from "tns-core-modules/ui/dialogs";
import { Page, EventData } from "tns-core-modules/ui/page";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Visibility } from "tns-core-modules/ui/enums";
import * as app from "tns-core-modules/application";
import { Product } from "../transfer-list/product";

@Component({
    selector: "ReturnItem",
    templateUrl: "./return-item.component.html",
    styleUrls: ["./return-item.component.css"]
})
export class ReturnItemComponent implements OnInit {
    salesRep: string = "Select a Sales Rep..";
    departureDate = new Date();
    returnDate = new Date();
    returnProducts = new Array<Product>();


    constructor(

        private _modalService: ModalDialogService,
        private _vcRef: ViewContainerRef,
        private _params: ModalDialogParams,
    ) {
        this.returnProducts = this._params.context.productArray;
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }



    submit() {
        this._params.closeCallback("return value");
        alert("Returned!");
    }

    cancel() {
        this._params.closeCallback("return value");
        alert("Return Cancelled!");
    }

    onOpenSearchAirportTap(search: string): void {
        const options: ModalDialogOptions = {
            viewContainerRef: this._vcRef,
            context: { search },
            fullscreen: true
        };

        this._modalService
            .showModal(SearchSupplierComponent, options)
            .then((result: any) => {
                // if (search == "Customer") {
                //     // this.customer = result.supplier.name;
                // } else
                if (search == "Sales Rep") {
                    this.salesRep = result.supplier.name;
                }
            });
    }

    onOpenSelectDate(isDepartureDate: boolean): void {
        const options: ModalDialogOptions = {
            viewContainerRef: this._vcRef,
            context: {},
            fullscreen: false
        };

        this._modalService
            .showModal(DatePickerComponent, options)
            .then((result: any) => {
                if (isDepartureDate) {
                    this.departureDate = result;
                } else {
                    this.returnDate = result;
                }
            });
    }
}
