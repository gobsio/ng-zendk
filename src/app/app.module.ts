import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeTrackingModule } from './shared/components/time-tracking/time-tracking.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    TimeTrackingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
