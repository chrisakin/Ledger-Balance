
//including required files and services 
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//exporting the RestAPi Service 
@Injectable({
  providedIn: 'root'
})
export class AmountService {

  constructor(private http: HttpClient) { }

  getHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders().set('Authorization', token) : null;
  }

  get(link: string) {
    return this.http.get(link, { headers: this.getHeaders() }).toPromise();
  }

  post(link: string, body: any) {
    return this.http.post(link, body, { headers: this.getHeaders() }).toPromise();
  }
  
 
 
}
