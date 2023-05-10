import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MdrzaService } from 'src/app/core/mdrza.service';

@Component({
  selector: 'mr-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatTableModule,
    NgIf,
    ReactiveFormsModule,
  ],
})
export class DashboardComponent implements OnInit {

  form!: FormGroup;

  dataSource = new MatTableDataSource();

  displayedColumns: string[] = ['rank', 'name', 'sumKm', 'sumDays', 'avgKm', 'avgDays', 'member'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private formBuilder: FormBuilder, private clipboard: Clipboard, private snackBar: MatSnackBar,
              private mdrzaService: MdrzaService) { }

  get f(): any {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      filter: ['', Validators.required]
    });
    this.mdrzaService.list().subscribe((response: any) => {
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
        this.setFilter(this.f.filter.value);
      }
    });
  }

  applyFilter(event: KeyboardEvent): void {
    this.setFilter((event.target as HTMLInputElement).value);
  }

  private setFilter(value: string): void {
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
