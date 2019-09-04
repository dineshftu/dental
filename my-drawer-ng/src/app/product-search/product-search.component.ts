import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { Product } from '../transfer-list/product';
import {
    Component,
    EventEmitter,
    OnInit,
    ViewContainerRef
} from "@angular/core";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular";
import { ReturnItemComponent } from "../return-item/return-item.component";
import { DatePickerComponent } from "../date-picker/date-picker.component";
import { action } from "tns-core-modules/ui/dialogs";
import { Page, EventData } from "tns-core-modules/ui/page";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Visibility } from "tns-core-modules/ui/enums";
import * as app from "tns-core-modules/application";
import { Switch } from "tns-core-modules/ui/switch/switch";
import { Router } from '@angular/router';


@Component({
    selector: 'ProductSearch',
    moduleId: module.id,
    templateUrl: './product-search.component.html',
    styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
    // productsOb: ObservableArray<Product> = new ObservableArray<Product>();
    count = 10;
    products = new Array<Product>();
    returnProducts = new Array<Product>();

    constructor(
        private _modalService: ModalDialogService,
        private _vcRef: ViewContainerRef, private router: Router
    ) {
        this.setProducts();

    }

    ngOnInit() {
    }

    setProducts() {
        for (let i = 0; i < this.count + 1; i++) {
            this.products.push(new Product("ITD00" + i, i + 2, false, 0));
        }
    }
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }


    submit() {
        // this.productsOb = new ObservableArray<Product>(this.products);
        this.returnProducts = new Array<Product>();
        let msg: string;
        let isSubmit = true;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].isChecked) {
                if (this.products[i].quantity < this.products[i].returnQty || this.products[i].returnQty <= 0) {
                    msg = "Add appropriate Return Qty in " + this.products[i].id;
                    isSubmit = false;
                    break;
                } else {
                    this.returnProducts.push(this.products[i]);
                }
            }
        }

        if (isSubmit) {
            if (this.returnProducts.length > 0) {
                const productArray = this.returnProducts;
                console.log(this.returnProducts.length + " length in");
                const options: ModalDialogOptions = {
                    viewContainerRef: this._vcRef,
                    context: { productArray },
                    fullscreen: true
                };

                this._modalService
                    .showModal(ReturnItemComponent, options)
                    .then((result: any) => {
                        this.router.navigate(["/home"]);
                    });
            } else {
                alert("Select Products!");

            }

        } else {
            alert(msg);
            console.log(this.returnProducts.length + " length");

        }

    }

    // toggleIsLocal(args: EventData) {
    //     let mySwitch = args.object as Switch;
    //     let isChecked = mySwitch.checked;
    //     if (isChecked) {
    //         this.isLocal = isChecked;
    //         this.isImport = false;
    //     }
    // }


}
