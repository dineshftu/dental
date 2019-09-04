import { ModalDialogParams, RouterExtensions } from "nativescript-angular";
import { Component, OnInit } from "@angular/core";
import { Transfer } from "../transfer-list/transfer";
import { alert, confirm } from "tns-core-modules/ui/dialogs/dialogs";

@Component({
    selector: "AcceptTransfer",
    templateUrl: "./accept-transfer.component.html",
    moduleId: module.id,
    styleUrls: ["./accept-transfer.component.css"]
})
export class AcceptTransferComponent implements OnInit {
    transfer: Transfer;
    editState = true;
    description = "Are you sure you want to accept this transfer!";
    constructor(private _params: ModalDialogParams) {
        this.transfer = this._params.context.transfer;
    }

    ngOnInit() {}

    onAccept(isAccept: boolean) {
        let options;
        if (isAccept) {
            options = {
                title: "Accept",
                message: this.description,
                okButtonText: "I Aggree, accept",
                neutralButtonText: "Cancel"
            };
        } else {
            options = {
                title: "Reject",
                message: "Are you sure you want to reject this transfer!",
                okButtonText: "Yes",
                neutralButtonText: "Cancel"
            };
        }

        confirm(options).then((result: boolean) => {
            console.log(result);
            if (result && isAccept) {
                alert("Transfer Accepted").then(() => {
                    this._params.closeCallback(isAccept);
                });
            } else if (result && !isAccept) {
                alert("Transfer Rejected").then(() => {
                    this._params.closeCallback(isAccept);
                });
            }
        });
    }

    onClose(): void {
        this._params.closeCallback("return value");
    }
}
