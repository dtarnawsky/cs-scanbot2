import { Component, NgZone } from '@angular/core';
import { BarcodeDocumentListService } from '../services/barcode-document-list.service';

@Component({
    selector: 'app-barcode-document-list',
    templateUrl: 'barcode-document-list.page.html',
})
export class BarcodeDocumentListPage {

    documentTypes = [];
    isFilteringEnabled: boolean;

    constructor(private ngZone: NgZone) {
        this.documentTypes = BarcodeDocumentListService.list;
        this.isFilteringEnabled = BarcodeDocumentListService.isFilteringEnabled;
    }

    onChange($event: CustomEvent | Event) {
        const key = ($event as any).detail.value;
        const value = ($event as any).detail.checked;
        BarcodeDocumentListService.update({
            key,
            value
        });
    }

    onEnabledChange($event: CustomEvent | Event) {
        const value = ($event as any).detail.checked;
        BarcodeDocumentListService.isFilteringEnabled = value;
        this.ngZone.run(() => {
            this.isFilteringEnabled = BarcodeDocumentListService.isFilteringEnabled;
        });
    }
}
