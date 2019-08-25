import {
    Component,
    EventEmitter,
    OnInit,
    ViewContainerRef
} from "@angular/core";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular";
import { SearchSupplierComponent } from "../search-supplier/search-supplier.component";
import { DatePickerComponent } from "../date-picker/date-picker.component";
import { action } from "tns-core-modules/ui/dialogs";
import { Page, EventData } from "tns-core-modules/ui/page";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Visibility } from "tns-core-modules/ui/enums";
import * as app from "tns-core-modules/application";
import { Switch } from "tns-core-modules/ui/switch/switch";

@Component({
    selector: "PurchaseOrder",
    moduleId: module.id,
    templateUrl: "./purchase-order.component.html",
    styleUrls: ["./purchase-order.component.css"]
})
export class PurchaseOrderComponent implements OnInit {
    supplier: string = "Select the Supplier..";
    address: string = "Enter the address";
    toAirport: string = "Enter Airport / City";
    attn: string = "";
    termOfPayments: string = "Cash";
    isImport: boolean = false;
    isLocal: boolean = false;
    departureDate = new Date();
    returnDate = new Date();
    dateSelector = new Date();
    // openSelectDate = new EventEmitter();
    isOnOpenDepartureDate: boolean = false;
    private _overlayGridLayout: GridLayout;
    private _selectDateGridLayout: GridLayout;

    constructor(
        private _modalService: ModalDialogService,
        private _vcRef: ViewContainerRef,
        private page: Page
    ) {}

    ngOnInit() {
        this._overlayGridLayout = this.page.getViewById("overlayGridLayout");
        this._selectDateGridLayout = this.page.getViewById(
            "selectDateGridLayout"
        );
        this.returnDate.setDate(this.departureDate.getDate() + 2);
    }

    toggleIsImport(args: EventData) {
        let mySwitch = args.object as Switch;
        let isChecked = mySwitch.checked;
        if (isChecked) {
            this.isImport = isChecked;
            this.isLocal = false;
        }
    }

    toggleIsLocal(args: EventData) {
        let mySwitch = args.object as Switch;
        let isChecked = mySwitch.checked;
        if (isChecked) {
            this.isLocal = isChecked;
            this.isImport = false;
        }
    }

    onOpenSearchAirportTap(isFrom: boolean): void {
        const options: ModalDialogOptions = {
            viewContainerRef: this._vcRef,
            context: { isFrom },
            fullscreen: true
        };

        this._modalService
            .showModal(SearchSupplierComponent, options)
            .then((result: any) => {
                // if (result.isFrom) {
                this.supplier = result.supplier.name;
                // } else {
                // this.toAirport = result.supplier.name;
                // }
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

    onTypeServiceTap(): void {
        const options = {
            title: "Term of Payments",
            message: "Select a Payment Type",
            cancelButtonText: "Cancel",
            actions: ["Cash", "Credit", "Cheque"]
        };

        action(options).then(result => {
            this.termOfPayments =
                // tslint:disable-next-line: triple-equals
                result == "Cancel" ? this.termOfPayments : result;
        });
    }

    // onOpenSelectDate(isOnOpenDepartureDate: boolean): void {
    //     console.log("Date fukc");
    //     this.openSelectDate.emit(isOnOpenDepartureDate);
    // }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    submit() {
        alert("Order Purchased!");
    }

    // onDateChanged(args) {
    //     const date: Date = args.value;
    //     this.dateSelector = date;
    // }

    // tslint:disable-next-line: adjacent-overload-signatures
    // onOpenSelectDate(isOnOpenDepartureDate: boolean) {
    //     this.isOnOpenDepartureDate = isOnOpenDepartureDate;

    //     if (this.isOnOpenDepartureDate) {
    //         this.dateSelector = this.departureDate;
    //     } else {
    //         this.dateSelector = this.returnDate;
    //     }
    //     console.log("In fun *****");

    //     // this._selectDateGridLayout.visibility = <any>Visibility.visible;
    //     console.log("In fun grid*****");
    //     this._selectDateGridLayout.className =
    //         "select-date animate-bounceInUp-delay-0ms";
    //     console.log("In fun ****last*");
    //     this._overlayGridLayout.animate({ opacity: 0.5, duration: 300 });
    //     console.log("In fun ****last*");
    // }

    // onCloseSelectDate(isCancel: boolean) {
    //     if (!isCancel) {
    //         this.selectedDate = this.dateSelector;
    //         if (this.isOnOpenDepartureDate) {
    //             this.departureDate = this.dateSelector;
    //         } else {
    //             this.returnDate = this.dateSelector;
    //         }
    //     }

    //     this._selectDateGridLayout.className = "select-date";
    //     this._overlayGridLayout
    //         .animate({ opacity: 0, duration: 300 })
    //         .then(() => {
    //             this._selectDateGridLayout.visibility = <any>(
    //                 Visibility.collapse
    //             );
    //         })
    //         .catch(() => {
    //             console.log("Something Wrong!");
    //         });
    // }
}
