import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/maintenance", pathMatch: "full" },
    {
        path: "maintenance",
        loadChildren: "~/app/maintenance/maintenance.module#MaintenanceModule"
    },
    { path: "tasks", loadChildren: "~/app/tasks/tasks.module#TasksModule" },
    // { path: "search", loadChildren: "~/app/search/search.module#SearchModule" },
    {
        path: "featured",
        loadChildren: "~/app/featured/featured.module#FeaturedModule"
    },
    // {
    //     path: "settings",
    //     loadChildren: "~/app/settings/settings.module#SettingsModule"
    // },
    {
        path: "purchase-order",
        loadChildren:
            "~/app/purchase-order/purchase-order.module#PurchaseOrderModule"
    },
    {
        path: "**",
        redirectTo: "/featured"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
