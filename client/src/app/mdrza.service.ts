import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MdrzaService {

  constructor(private httpClient: HttpClient) { }

  list(): Observable<any> {
    return this.httpClient.get(environment.api + 'mdrza').pipe(map(response => response));
  }
}
