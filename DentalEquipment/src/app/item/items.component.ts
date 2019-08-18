import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    supplier: string;
    items = ["Credit", "Cash", "Cheque"];

    constructor() {}

    ngOnInit(): void {}

    public firstTx: string = "";

    public submit() {
        alert("Purchace Order Request Placed Successfully!");
    }
}
