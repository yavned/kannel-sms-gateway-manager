import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';


@Injectable()
export class LoginService {

  constructor (
    private _http: HttpClient
  ) {}

  baseUrl = environment['apiUrl']; // Base Url for API

  login(form): Observable<any> {
    let uri = this.baseUrl + 'login';
    return this._http.post(uri, form);
  }
}
