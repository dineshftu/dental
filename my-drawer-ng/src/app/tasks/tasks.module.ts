import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TasksRoutingModule } from "./tasks-routing.module";
import { TasksComponent } from "./tasks.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TasksRoutingModule
    ],
    declarations: [
        TasksComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TasksModule { }
