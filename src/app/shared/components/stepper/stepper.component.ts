import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  @Input() numSteps = 0;
  @Input() completeSteps = 0;
  @Input() activeStep = 0;
  steps = [];

  constructor() {}

  ngOnInit() {
    this.steps = Array(this.numSteps)
      .fill(null)
      .map((x, idx) => {
        const active = idx === this.activeStep;
        const complete = idx < this.completeSteps;
        return {
          active,
          complete,
        };
      });
  }
}
