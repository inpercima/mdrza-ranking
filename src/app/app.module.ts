import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    OverlayModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    DashboardComponent,
],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
