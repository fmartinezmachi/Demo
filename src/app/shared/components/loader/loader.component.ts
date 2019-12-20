import { Component, Input, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnDestroy {
  @Input() percentage = 0;

  subscription = new Subscription();

  constructor() {
    this.runProgressBar();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  runProgressBar() {
    this.subscription.add(
      timer(0, 300)
        .pipe(takeWhile(() => this.isWidthWithinLimit()))
        .subscribe(() => {
          this.percentage = this.percentage + 1;
          // console.log(this.percentage);
        }),
    );
  }

  isWidthWithinLimit() {
    if (this.percentage === 100) {
      return false;
    } else {
      return true;
    }
  }

  restart = () => {
    if (this.percentage === 100) {
      this.percentage = 0;
    }
    return true;
  };
}
