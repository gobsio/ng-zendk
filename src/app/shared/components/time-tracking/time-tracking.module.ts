import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeTrackingComponent } from './time-tracking.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TimeTrackingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TimeTrackingComponent
  ],
  providers: []
})
export class TimeTrackingModule {}
