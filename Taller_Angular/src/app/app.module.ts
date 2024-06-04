import { NgModule } from '@angular/core';

import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesModule } from './series/series.module';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    SeriesModule,

    HttpClientModule,
    RouterModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
