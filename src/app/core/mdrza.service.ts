import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Mdrza } from './mdrza.model';
import { Team } from './team.model';

@Injectable({
  providedIn: 'root',
})
export class MdrzaService {
  constructor(private httpClient: HttpClient) {}

  list(): Observable<Team[]> {
    const teams: Team[] = [];
    return this.httpClient.get<Mdrza[]>(environment.api).pipe(
      map((response) => {
        response.forEach((element: Mdrza) => {
          const team = {} as Team;
          team.name = element.teamname;
          team.sumKm = Number(element.Summe);
          team.sumDays = Number(element.Tage);
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
