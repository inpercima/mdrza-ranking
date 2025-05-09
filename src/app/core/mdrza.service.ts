import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Data, Mdrza } from './mdrza.model';
import { Team } from './team.model';

@Injectable({
  providedIn: 'root',
})
export class MdrzaService {
  private httpClient = inject(HttpClient);

  list(): Observable<Team[]> {
    const teams: Team[] = [];
    return this.httpClient.get<Mdrza>(environment.api).pipe(
      map((response) => {
        response.data.forEach((element: Data) => {
          const team = {} as Team;
          team.name = element.teamname;
          team.sumKm = Number(element.summe);
          team.sumDays = Number(element.tage);
          team.member = Number(element.AnzTeammember);
          team.avgKm = element.AvgKM;
          team.avgDays = element.AvgDays;
          team.rank = element.rank;
          teams.push(team);
        });
        return teams;
      })
    );
  }
}
