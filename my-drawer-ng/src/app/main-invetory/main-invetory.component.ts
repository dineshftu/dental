import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Router } from "@angular/router";
import { Product } from "../transfer-list/product";

@Component({
    selector: "MainInventory",
    moduleId: module.id,
    templateUrl: "./main-invetory.component.html"
})
export class MainInventoryComponent implements OnInit {
    actionBar = "Main Inventory";
    count = 25;
    isMyInventory = true;
    products = new Array<Product>();

    constructor(private router: Router) {
        this.setProducts();
        // Use the component constructor to inject providers.
    }

    setProducts() {
        for (let i = 0; i < this.count + 1; i++) {
            this.products.push(new Product("ITD00" + i, i + 2, false, 0));
        }
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    toggleInventory() {
        this.isMyInventory = !this.isMyInventory;
        if (this.isMyInventory) {
            this.actionBar = "My Inventory";
            this.count -= 20;
        } else {
            this.actionBar = "Central Inventory";
            this.count += 20;
        }
        this.setProducts();
    }

    placeOrder() {
        this.router.navigate(["/place-order"]);
    }

    returnItems() {
        this.router.navigate(["/return-item"]);
    }
}

// https://discourse.nativescript.org/t/getting-in-the-zone-js-handle-view-updates-with-zonedcallback-nathan-walker/516--> to update view
