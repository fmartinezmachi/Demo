import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss'],
})
export class AppListComponent implements OnInit {
  titles = [
    'Secure Storage',
    'Login',
    'Global Position',
    'Payments',
    'Quick Balance',
    'Webview Bridge',
    'UI Component',
    'Service Invocation',
    'Barcode Scanner',
    'Functional Analytics',
  ];
  subtitles = [0, 1, 1, 1];
  icons = [0xf, 0xa, 0x8, 0x2, 0x8, 0x8, 0x8, 0xa, 0x8, 0xa];
  a = Array(10)
    .fill('')
    .map((x, i) => ({
      title: this.titles[i],
      subtitle: this.subtitles[i] === 1 ? 'TECHNICAL' : 'FUNCTIONAL',
      icons: Array(4)
        .fill(false)
        .map((x, idx) => ((0x8 >> idx) & this.icons[i]) === 0),
      description:
        'Description and more information of component, more information of component, more information of component',
    }));

  constructor() {}

  ngOnInit() {}
}
