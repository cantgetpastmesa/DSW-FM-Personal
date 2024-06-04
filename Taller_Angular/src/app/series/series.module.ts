import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesComponent } from './series.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,

    HttpClientModule,

    RouterModule
  ],
  declarations: [SeriesComponent],
  
  exports: [SeriesComponent]
})
export class SeriesModule { }
