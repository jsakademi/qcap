import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { AuthHttp } from "angular2-jwt";
import { Product } from "./stock.models"

@Injectable()
export class StockService {
    
    constructor(private http: Http) { }
    
    getProducts(): Observable<Array<Product>> {
        return this.http.get('http://192.168.1.5:8080/products')
                   .map((response: Response) => {
                       return response.json().result;
                   });
    }
    
    addProduct(product: Product): Observable<Product> {
        return this.http.post('http://192.168.1.5:8080/products', product)
                   .map((response: Response) => {
                       return response.json().result;
                   });
    }
    
    updateProduct(id: string, product: Product): Observable<Product> {
        return this.http.put('http://192.168.1.5:8080/products/' + id, product)
                   .map((response: Response) => {
                       return response.json().result;
                   });
    }
    
    deleteProduct(id: string): Observable<Product> {
        return this.http.delete('http://192.168.1.5:8080/products/' + id)
                   .map((response: Response) => {
                       return response.json().result;
                   });
    }
}
