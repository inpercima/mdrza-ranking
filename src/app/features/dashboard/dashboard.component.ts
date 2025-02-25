import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MdrzaService } from '../../core/mdrza.service';
import { Team } from '../../core/team.model';

@Component({
  selector: 'mr-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
})
export class DashboardComponent implements OnInit {
  readonly #formBuilder = inject(FormBuilder);
  readonly #clipboard = inject(Clipboard);
  readonly #snackBar = inject(MatSnackBar);
  readonly #mdrzaService = inject(MdrzaService);

  form = this.#formBuilder.group({
    filter: ['', Validators.required],
  });

  dataSource = new MatTableDataSource<Team>();

  displayedColumns: string[] = ['rank', 'name', 'sumKm', 'sumDays', 'avgKm', 'avgDays', 'member'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.#mdrzaService.list().subscribe((response: Team[]) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
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
        this.form.controls.filter.setValue(teams.trim());
        this.setFilter(this.form.controls.filter.value!);
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
    url.searchParams.set('teams', this.form.controls.filter.value!);
    this.#clipboard.copy(url.href);
    this.#snackBar.open('Teams copied to clipboard', 'Ready', {
      duration: 3000,
      verticalPosition: 'top',
    });
  }
}
