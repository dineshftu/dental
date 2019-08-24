import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Router } from "@angular/router";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Tasks",
    moduleId: module.id,
    templateUrl: "./tasks.component.html",
    styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
    selected = "";
    tasks = [
        "Purchase Order",
        "Goods Receive Note",
        "Goods Return Note",
        "Order Placement",
        "Sales Invoice",
        "Sales Return",
        "Customer Payments"
    ];

    constructor(private router: Router) {}

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    select(args) {
        this.selected = this.tasks[args.index].toLowerCase().replace(" ", "-");

        // For phone users we need to navigate to another page to show the detail view.
        // if (!this.isTablet) {
        this.router.navigate([this.selected]);
        // , {
        //     queryParams: { selected: JSON.stringify(this.selected) }
        // }
        // );
        // }
    }
}
