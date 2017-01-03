import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { StockRouting } from './stock-routing';
import { ReactiveFormsModule } from '@angular/forms';
import { LaddaModule } from 'angular2-ladda';
import { StockService } from './stock.service';

@NgModule({
    imports     : [
        CommonModule,
        ReactiveFormsModule,
        LaddaModule,
        StockRouting
    ],
    declarations: [ProductDetailsComponent],
    providers   : [StockService]
})
export class StockModule {
}
