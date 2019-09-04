import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ModalDialogParams, RouterExtensions } from "nativescript-angular";
import { Page } from "tns-core-modules/ui/page";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { isAndroid } from "tns-core-modules/platform";
import { Color } from "tns-core-modules/color";

class DataItem {
    constructor(public name: string) {}
}

// tslint:disable-next-line: max-classes-per-file
@Component({
    selector: "SearchSupplier",
    moduleId: module.id,
    templateUrl: "./search-supplier.component.html",
    styleUrls: ["./search-supplier.component.css"]
})
export class SearchSupplierComponent implements OnInit {
    suppliers: ObservableArray<DataItem> = new ObservableArray<DataItem>();
    search: string = "Search for a ";
    searchItem: string = "";
    private _searchedText: string = "";
    private arraySuppliers: Array<DataItem> = [];

    constructor(
        private _params: ModalDialogParams,
        private _page: Page,
        private router: RouterExtensions,
        private _activeRoute: ActivatedRoute
    ) {
        this.searchItem = this._params.context.search;
        this.search = this.search + this.searchItem;

        // for (let index = 0; index < 8; index++) {
        this.arraySuppliers.push(new DataItem("Arya Stark"));
        this.arraySuppliers.push(new DataItem("Robert Baretheon"));
        this.arraySuppliers.push(new DataItem("Lyanna Mormont"));
        this.arraySuppliers.push(new DataItem("Marlin Brelek"));
        this.arraySuppliers.push(new DataItem("John Doe"));
        this.arraySuppliers.push(new DataItem("Arthur Pereira"));

        // }

        this.suppliers = new ObservableArray<DataItem>(this.arraySuppliers);
    }

    // tslint:disable-next-line: no-empty
    ngOnInit() {}

    onClose(): void {
        this._params.closeCallback("return value");
    }

    onSelectItem(args) {
        // tslint:disable-next-line: prefer-const
        let supplier =
            this._searchedText !== ""
                ? this.suppliers.getItem(args.index)
                : this.arraySuppliers[args.index];
        this._params.closeCallback({
            supplier
        });
    }

    onSubmit(args) {
        // tslint:disable-next-line: prefer-const
        let searchBar = <SearchBar>args.object;
        // tslint:disable-next-line: prefer-const
        let searchValue = searchBar.text.toLowerCase();
        this._searchedText = searchValue;

        this.suppliers = new ObservableArray<DataItem>();
        if (searchValue !== "") {
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < this.arraySuppliers.length; i++) {
                if (
                    this.arraySuppliers[i].name
                        .toLowerCase()
                        .indexOf(searchValue) !== -1
                ) {
                    this.suppliers.push(this.arraySuppliers[i]);
                }
            }
        }
    }

    searchBarLoaded(args) {
        // tslint:disable-next-line: prefer-const
        let searchBar = <SearchBar>args.object;
        searchBar.dismissSoftInput();

        if (isAndroid) {
            searchBar.android.clearFocus();
        }

        searchBar.text = "";
    }

    onClear(args) {
        // tslint:disable-next-line: prefer-const
        let searchBar = <SearchBar>args.object;
        searchBar.text = "";
        searchBar.hint = "Search for a Supplier";

        this.suppliers = new ObservableArray<DataItem>();
        this.arraySuppliers.forEach(item => {
            this.suppliers.push(item);
        });
    }

    onTextChanged(args) {
        this.onSubmit(args);
    }
}
