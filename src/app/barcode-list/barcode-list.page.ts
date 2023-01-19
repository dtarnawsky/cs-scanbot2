import { Component } from '@angular/core';
import { BarcodeListService } from '../services/barcode-list.service';

@Component({
    selector: 'app-barcode-list',
    templateUrl: 'barcode-list.page.html',
})
export class BarcodeListPage {

    barcodes = [];

    constructor() {
        this.barcodes = BarcodeListService.items;
    }

    onChange($event: CustomEvent | Event) {
        const format = ($event as any).detail.value;
        const isChecked = ($event as any).detail.checked;
        BarcodeListService.update(format, isChecked);
    }
}
