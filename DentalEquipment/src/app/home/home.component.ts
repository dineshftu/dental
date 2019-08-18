import { OnInit, Component } from "@angular/core";
import { MenuList } from "./menu";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items = new Array<MenuList>(
        {
            name: "Maintenance",
            isVisible: false,
            list: [
                // "Categories",
                // "Products",
                // "Areas",
                // "Customers",
                // "Sales Reps",
                // "Shipments",
                // "Suppliers"
            ],
            route: [
                "Categories"
                // "Products",
                // "Areas",
                // "Customers",
                // "Sales Reps",
                // "Shipments",
                // "Suppliers"
            ]
        },
        {
            name: "Tasks",
            isVisible: false,
            list: [
                "Purchase Order"
                // "Goods Receive Note",
                // "Goods Return Note",
                // "Sales Invoice",
                // "Sales Return",
                // "Customer Payment"
            ],
            route: [
                "purchase-order",
                "Goods Receive Note",
                "Goods Return Note",
                "Sales Invoice",
                "Sales Return",
                "Customer Payment"
            ]
        },
        { name: "Transport In/Out", isVisible: false, list: [], route: [] },
        { name: "Tools", isVisible: false, list: [], route: [] },
        { name: "Reports", isVisible: false, list: [], route: [] }
    );

    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor() // private itemService: ItemService
    {}

    ngOnInit(): void {
        // this.items =
        // this.itemService.getItems();
    }
    dropDown(menu: MenuList) {
        var temp = menu.isVisible;
        for (let index = 0; index < this.items.length; index++) {
            this.items[index].isVisible = false;
        }

        menu.isVisible = !temp;
        console.log(menu.name + "************" + menu.list.length);
    }
}

// items = new Array<MenuList>(
//     {
//         name: "Maintenance",
//         list: [
//             "Categories",
//             "Products",
//             "Areas",
//             "Customers",
//             "Sales Reps",
//             "Shipments",
//             "Suppliers"
//         ]
//     },
//     {
//         name: "Tasks",
//         list: [
//             "Purchase Order",
//             "Goods Receive Note",
//             "Goods Return Note",
//             "Sales Invoice",
//             "Sales Return",
//             "Customer Payment"
//         ]
//     },
//     { name: "Transport In/Out", list: [] },
//     { name: "Tools", list: [] },
//     { name: "Reports", list: [] }
// );
