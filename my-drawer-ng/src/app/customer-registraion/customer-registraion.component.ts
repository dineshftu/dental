import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "CustomerRegistraion",
    moduleId: module.id,
    templateUrl: "./customer-registraion.component.html",
    styleUrls: ["./customer-registraion.component.css"]
})
export class CustomerRegistraionComponent implements OnInit {
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    submit() {
        alert("Customer Registered!");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
