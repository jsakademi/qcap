import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockRouting } from './stock-routing';
import { ReactiveFormsModule } from '@angular/forms';
import { Restangular } from 'ng2-restangular';
import { STOCK_REST, StockRestFactory } from './stock.rest.service'
import { LaddaModule } from 'angular2-ladda';
import { ProductDetailsComponent } from "./product-details/product-details.component"




@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StockRouting,
    LaddaModule,
  ],
  declarations: [ProductDetailsComponent],
  providers: [
    { provide: STOCK_REST, useFactory:  StockRestFactory, deps: [Restangular] } // Configurating our factory
  ]
})
export class StockModule {
}
