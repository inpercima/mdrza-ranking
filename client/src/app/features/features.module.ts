import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    ClipboardModule,
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    DashboardComponent,
  ],
})
export class FeaturesModule { }
