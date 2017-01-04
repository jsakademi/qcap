import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockRouting } from './stock-routing';
import { ReactiveFormsModule } from '@angular/forms';
import { LaddaModule } from 'angular2-ladda';
import { ProductDetailsComponent } from "./product-details/product-details.component"
import { ProductListComponent } from './product-list/product-list.component';
import { StockService } from './stock.service';


@NgModule({
    imports     : [
        CommonModule,
        ReactiveFormsModule,
        StockRouting,
        LaddaModule,
    ],
    declarations: [ProductDetailsComponent, ProductListComponent],
    providers   : [StockService]
})
export class StockModule {
}
