import { Component, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit, OnChanges {
  @Input() titles: string[] = [];
  @Input() steps = 0;
  @Input() current = 0;
  state = [];

  constructor() {}

  ngOnInit() {
    this.state = Array(this.steps)
      .fill(null)
      .map((x, idx) => ({
        active: idx === this.current,
        complete: idx < this.current,
      }));
  }

  ngOnChanges(changes: SimpleChanges) {
    const { current: { currentValue: current = this.current } = {} } = changes;
    this.current = current;
    this.state.forEach((x, idx) => {
      x.active = idx === this.current;
      x.complete = idx < this.current;
    });
  }
}
