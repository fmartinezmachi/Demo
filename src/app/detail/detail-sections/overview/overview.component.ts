import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ComponentProperty } from '@sharedModels/component-property';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit, OnChanges {
  @Input() references?: any[] = [];
  @Input() properties?: ComponentProperty[] = [];

  referenceUrl = null;
  loading = true;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    const { currentValue } = changes.references;
    // set default reference when component initialises
    if (!this.referenceUrl && currentValue) {
      const [first = { thumb: '', url: '' }] = currentValue;
      this.referenceUrl = first.url;
    }
  }

  iframeLoaded() {
    if (!this.referenceUrl) {
      return false;
    }
    this.loading = false;
  }

  setActiveReference(url: string) {
    this.loading = true;
    this.referenceUrl = url;
  }
}
