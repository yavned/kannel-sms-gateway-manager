import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiService } from '../../core/services/api.service';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

    constructor(
      private http: HttpClient,
      private _api: ApiService
    ) { }

    getAllUsers(): Observable<any> {
     const url = 'user';

      return this._api.get(url, {}, true);
    }

    getSingleUser(id): Observable<any> {
      const url = 'usergetbyid/get/' + id;

      return this._api.get(url, {}, true);
    }
}
