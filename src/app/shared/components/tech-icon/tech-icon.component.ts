import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tech-icon',
  templateUrl: './tech-icon.component.html',
  styleUrls: ['./tech-icon.component.scss'],
})
export class TechIconComponent implements OnInit {
  @Input() technology: string = '';
  @Input() disabled: boolean = false;
  className: string = '';

  constructor() {}

  ngOnInit() {
    this.className = `icon ${this.technology} ${this.disabled ? 'disabled' : ''}`;
  }
}
