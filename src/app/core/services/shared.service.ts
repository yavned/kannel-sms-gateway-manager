import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';



@Injectable()
export class SharedService {

  constructor(
    private _api: ApiService
  ) {}

  isSidebarExpanded: BehaviorSubject<boolean> = new BehaviorSubject(true);
  isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
}
