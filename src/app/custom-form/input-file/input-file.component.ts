import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BaseInput } from '../BaseInput';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss'],
})
export class InputFileComponent extends BaseInput<any> implements OnInit {
  @ViewChild('labelImport', { static: false }) labelImport: ElementRef;

  fileToUpload: File = null;

  constructor() {
    super();
  }

  ngOnInit() {}

  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');
    this.fileToUpload = files.item(0);
  }

  import(): void {
    console.log('import ' + this.fileToUpload.name);
  }
}
