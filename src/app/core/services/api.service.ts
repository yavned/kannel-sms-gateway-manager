import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {

    constructor(
      private http: Http
    ) {}

    public baseUrl = environment.apiUrl;

    post(url: string, body?: object, token?: boolean): Observable<any> {
      const headers = new Headers({ 'Content-Type': 'application/json' });

      if (token) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('sms_admin_token'));
      }

      const options = new RequestOptions({ headers: headers });

      return this.http.post(this.baseUrl + url, body, options)
        .map(res => res.json())
        .catch((error: any) => Observable.throw(error.json().errors || 'Server error'));
    }

    get(url: string, query?: Object, token?: boolean): Observable<any> {
      const params: URLSearchParams = new URLSearchParams();

      for (const k in query) {
        if (query.hasOwnProperty(k)) {
          params.set(k, query[k]);
        }
      }

      const headers = new Headers({ 'Content-Type': 'application/json' });

      if (token) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('sms_admin_token'));
      }

      const options = new RequestOptions({ headers: headers, search: params });
      console.log(this.baseUrl + url, options);
      return this.http.get(this.baseUrl + url, options)
        .map(res => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    put(url: string, body?: object, token?: boolean): Observable<any> {
      const headers = new Headers({ 'Content-Type': 'application/json' });

      if (token) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('sms_admin_token'));
      }

      const options = new RequestOptions({ headers: headers });

      return this.http.put(this.baseUrl + url, body, options)
        .map(res => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    patch(url: string, body?: object, token?: boolean): Observable<any> {
      const headers = new Headers({ 'Content-Type': 'application/json' });

      if (token) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('sms_admin_token'));
      }

      const options = new RequestOptions({ headers: headers });

      return this.http.patch(this.baseUrl + url, body, options)
        .map(res => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    delete(url: string, token?: boolean): Observable<any> {
      const headers = new Headers();

      if (token) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('sms_admin_token'));
      }

      const options = new RequestOptions({ headers: headers });

      return this.http.delete(this.baseUrl + url, options);
    }
}
