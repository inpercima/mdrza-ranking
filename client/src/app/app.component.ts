import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

import { MdrzaService } from './mdrza.service';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'mr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'mdrza-ranking';
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['teamname', 'summe', 'tage', 'AnzTeammember', 'AvgKM', 'AvgDays', 'rank'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  filter: string;

  constructor(private activatedRoute: ActivatedRoute, private mdrzaService: MdrzaService) { }

  ngOnInit(): void {
    const queryParamMap = new URL(location.href).searchParams.get('teams');
    this.mdrzaService.list().subscribe(response => {
      this.dataSource = new MatTableDataSource(response);

      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = (data: any, filterValue: string): boolean => {
        filterValue = filterValue.slice(-1) === ',' ? filterValue.slice(0, -1) : filterValue;
        const filters = filterValue.trim().split(',');
        let hasMatch = false;
        for (const filter of filters) {
          hasMatch = data.teamname.trim().toLocaleLowerCase().indexOf(filter.trim().toLocaleLowerCase()) >= 0;
          if (hasMatch)  {
            break;
          }
        }
        return hasMatch;
      };

      if (queryParamMap) {
        this.filter = queryParamMap;
        this.applyFilter(this.filter);
      }
    });
  }

  applyFilter(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
  }
}
