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

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
