import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { StockRouting } from './stock-routing';
import { ReactiveFormsModule } from '@angular/forms';
import { LaddaModule } from 'angular2-ladda';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LaddaModule,
    StockRouting
  ],
  declarations: [ProductDetailsComponent]
})
export class StockModule { }
