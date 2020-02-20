import { Component } from '@angular/core';

@Component({
  selector: 'demo-timepicker-spinners-only',
  templateUrl: './spinnersOnly.html'
})
export class DemoTimepickerSpinnersOnlyComponent {
  isMeridian = false;
  spinnersOnly = true;
  myTime = new Date();
}
