import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { AuthHttp } from "angular2-jwt";
import { Product } from "./stock.models"

@Injectable()
export class ProductService {

    constructor(private http: AuthHttp) { }

    getProducts(): Observable<Array<Product>> {
        return this.http.get('/products')
            .map((response: Response) => {
                return  response.json().result;
            });
    }

    addProduct(product): Observable<Product> {
        return this.http.post('/products',product)
            .map((response: Response) => {
                return  response.json().result;
            });
    }

    updateProduct(id,product):Observable<Product> {
        return this.http.put('/products/' + id,product)
            .map((response: Response) => {
                return  response.json().result;
            });
    }

    deleteProduct(id):Observable<Product> {
        return this.http.delete('/products/' + id)
            .map((response: Response) => {
                return  response.json().result;
            });
    }
}
