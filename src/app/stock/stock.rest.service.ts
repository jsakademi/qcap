import { Restangular } from 'ng2-restangular';
import { OpaqueToken } from "@angular/core";


export const STOCK_REST = new OpaqueToken('StockRest');
export function StockRestFactory(restangular: Restangular) {
    return restangular.service('products');
}