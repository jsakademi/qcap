import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../stock.models';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input()
  products: [Product];

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.stockService.products().getList().subscribe(products => this.products = products);
  }
  
  deleteProduct(product, index) {
    //this.stockService.deleteProduct(product._id).subscribe(response => this.products.splice(index, 1));
  }
}
