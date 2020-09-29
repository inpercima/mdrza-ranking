import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

import { MdrzaService } from 'src/app/mdrza.service';

@Component({
  selector: 'mr-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  filterForm: FormGroup;

  dataSource = new MatTableDataSource();

  displayedColumns: string[] = ['rank', 'name', 'sumKm', 'sumDays', 'avgKm', 'avgDays', 'member'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private formBuilder: FormBuilder, private clipboard: Clipboard, private snackBar: MatSnackBar,
              private mdrzaService: MdrzaService) { }

  get f(): any {
    return this.filterForm.controls;
  }

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      filter: ['', Validators.required]
    });
    this.mdrzaService.list().subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = (data: any, filterValue: string): boolean => {
        filterValue = filterValue.slice(-1) === ',' ? filterValue.slice(0, -1) : filterValue;
        const filters = filterValue.trim().split(',');
        let hasMatch = false;
        for (const filter of filters) {
          hasMatch = data.name.trim().toLocaleLowerCase().indexOf(filter.trim().toLocaleLowerCase()) >= 0;
          if (hasMatch) {
            break;
          }
        }
        return hasMatch;
      };
      const teams = new URL(location.href).searchParams.get('teams');
      if (teams) {
        this.f.filter.setValue(teams.trim());
        this.applyFilter(this.f.filter.value);
      }
    });
  }

  applyFilter(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  onSubmit(): void {
    const url = new URL(location.href);
    url.searchParams.set('teams', this.f.filter.value);
    this.clipboard.copy(url.href);
    this.snackBar.open('Teams copied to clipboard', 'Ready', {
      duration: 3000,
      verticalPosition: 'top',
    });
  }
}
