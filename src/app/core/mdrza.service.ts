import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Team } from './team.model';

@Injectable({
  providedIn: 'root',
})
export class MdrzaService {
  readonly #httpClient = inject(HttpClient);

  list(): Observable<Team[]> {
    return this.#httpClient.get<Team[]>(environment.api + 'list');
  }
}
