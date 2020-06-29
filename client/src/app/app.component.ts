import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import { MdrzaService } from './mdrza.service';

@Component({
  selector: 'mr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  appname: string;

  dataSource = new MatTableDataSource();

  displayedColumns: string[] = ['rank', 'name', 'sumKm', 'sumDays', 'avgKm', 'avgDays', 'member'];

  filter: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Adds the custom theme to the app root.
   * For overlays the OverlayContainer like in the constructor is used.
   * For dialogs the panelClass of the configuration must added manually like
   *
   * const dialogConfig = new MatDialogConfig();
   * dialogConfig.panelClass = `${environment.theme}-theme`;
   */
  @HostBinding('class') class = `${environment.theme}-theme`;

  public constructor(private titleService: Title, public overlayContainer: OverlayContainer, private mdrzaService: MdrzaService) {
    this.appname = environment.appname;
    this.titleService.setTitle(this.appname);
    this.overlayContainer.getContainerElement().classList.add(`${environment.theme}-theme`);
  }

  ngOnInit(): void {
    this.mdrzaService.list().subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = (data: any, filterValue: string): boolean => {
        filterValue = filterValue.slice(-1) === ',' ? filterValue.slice(0, -1) : filterValue;
        const filters = filterValue.trim().split(',');
        let hasMatch = false;
        for (const filter of filters) {
          hasMatch = data.teamname.trim().toLocaleLowerCase().indexOf(filter.trim().toLocaleLowerCase()) >= 0;
          if (hasMatch) {
            break;
          }
        }
        return hasMatch;
      };
      const teams = new URL(location.href).searchParams.get('teams');
      if (teams) {
        this.filter = teams;
        this.applyFilter(this.filter);
      }
    });
  }

  applyFilter(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
  }
}
