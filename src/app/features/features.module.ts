import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    ClipboardModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    DashboardComponent,
  ],
  exports: [
    DashboardComponent,
  ],
})
export class FeaturesModule { }
