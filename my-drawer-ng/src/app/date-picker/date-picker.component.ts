import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { ModalDialogParams, RouterExtensions } from "nativescript-angular";

@Component({
    selector: "DatePickerCustom",
    moduleId: module.id,
    templateUrl: "./date-picker.component.html",
    styleUrls: ["./date-picker.component.css"]
})
export class DatePickerComponent implements OnInit {
    dateSelector = new Date();

    constructor(
        private _params: ModalDialogParams,
        private _page: Page,
        private router: RouterExtensions,
        private _activeRoute: ActivatedRoute
    ) {}

    // tslint:disable-next-line: no-empty
    ngOnInit() {}

    onDateChanged(args) {
        const date: Date = args.value;
        this.dateSelector = date;
    }

    onCloseSelectDate(isCancel: boolean) {
        if (isCancel) {
            this._params.closeCallback("return value");
        } else {
            console.log(this.dateSelector + "*****");
            this._params.closeCallback(this.dateSelector);
        }
    }
}
