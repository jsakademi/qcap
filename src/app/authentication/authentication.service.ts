import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    
    constructor(private http: Http) { }
    
    login(credentials): Observable<boolean> {
        return this.http.post('http://192.168.1.3:8080/login', credentials)
                   .map((response: Response) => {
                       // store username and jwt token in local storage to keep user logged in between page refreshes
                       localStorage.setItem('id_token', response.json().token);
                       // return true to indicate successful login
                       return true;
                   });
    }
}