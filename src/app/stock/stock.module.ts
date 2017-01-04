import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockRouting } from './stock-routing';
import { ReactiveFormsModule } from '@angular/forms';
import { Restangular } from 'ng2-restangular';
import { STOCK_REST, StockRestFactory } from './stock.rest.service'
import { LaddaModule } from 'angular2-ladda';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StockRouting, LaddaModule
  ],
  declarations: [],
  providers: [
    { provide: STOCK_REST, useFactory:  StockRestFactory, deps: [Restangular] } // Configurating our factory
  ]
})
export class StockModule {
}
