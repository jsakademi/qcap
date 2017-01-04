import { Injectable } from '@angular/core';
import { Restangular } from 'ng2-restangular';

@Injectable()
export class StockService {

  constructor(private restangular: Restangular) { }

  products(): Restangular{
    return this.restangular.service('products');
  }
}
