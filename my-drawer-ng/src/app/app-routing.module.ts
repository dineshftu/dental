import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    {
        path: "transfer",
        loadChildren: "~/app/transfer-list/transfer.module#TransferListModule"
    },
    {
        path: "home",
        loadChildren: "~/app/home/home.module#HomeModule"
    },
    {
        path: "my-invetory",
        loadChildren:
            "~/app/my-invetory/my-invetory.module#MyInventoryModule"
    },
    {
        path: "main-invetory",
        loadChildren:
            "~/app/main-invetory/main-invetory.module#MainInventoryModule"
    },
    {
        path: "customer-registraion",
        loadChildren:
            "~/app/customer-registraion/customer-registraion.module#CustomerRegistraionModule"
    },
    // {
    //     path: "return-item",
    //     loadChildren: "~/app/return-item/return-item.module#ReturnItemModule"
    // },
    {
        path: "place-order",
        loadChildren: "~/app/place-order/place-order.module#PlaceOrderModule"
    },
    {
        path: "product-search",
        loadChildren: "~/app/product-search/product-search.module#ProductSearchModule"
    },
    {
        path: "**",
        redirectTo: "/home"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
