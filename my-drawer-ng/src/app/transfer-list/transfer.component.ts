import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular";
import { Page, EventData } from "tns-core-modules/ui/page";
import { Router } from "@angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Transfer } from "./transfer";
import { AcceptTransferComponent } from "../accept-transfer/accept-transfer.component";
import { Product } from "./product";

@Component({
    selector: "Taintenance",
    moduleId: module.id,
    templateUrl: "./transfer.component.html"
})
export class TransferListComponent implements OnInit {
    transferList = new Array<Transfer>();
    selected: any;

    constructor(
        private router: Router,
        private _modalService: ModalDialogService,
        private _vcRef: ViewContainerRef,
        private page: Page
    ) {
        // Use the component constructor to inject providers.s
        for (let index = 0; index < 28; index++) {
            let products = new Array<Product>();
            for (let i = 0; i < index + 1; i++) {
                products.push(new Product("ITD00" + i, i + 2, false, 0));
            }
            this.transferList.push(
                new Transfer(index, "Transer  " + index, products)
            );
        }
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    select(args) {
        // this.selected = this.transferList[args.index].id;
        let transfer = this.transferList[args.index];
        const options: ModalDialogOptions = {
            viewContainerRef: this._vcRef,
            context: { transfer },
            fullscreen: true
        };

        this._modalService
            .showModal(AcceptTransferComponent, options)
            .then((result: boolean) => {
                if (!result) {
                    this.transferList.splice(args.index, 1);
                }
            });

        // For phone users we need to navigate to another page to show the detail view.
        // if (!this.isTablet) {
        // this.router.navigate(["transfer/" + this.selected]);
        // , {
        //     queryParams: { selected: JSON.stringify(this.selected) }
        // }
        // );
        // }
    }
}
