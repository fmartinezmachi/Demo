import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseInput } from '../BaseInput';
import { acceptedImageTypes } from './input-file.consts';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFileComponent),
      multi: true,
    },
  ],
})
export class InputFileComponent extends BaseInput<any> implements OnInit {
  fileToUpload: File = null;
  fileLoaded: string = null;

  constructor() {
    super();
  }

  ngOnInit() {}

  getPreviewImg = file => {};

  onFileChange = (files: FileList) => {
    const file = files.item(0);
    if (!this.validateImage(file)) {
      return false;
    }
    this.fileToUpload = file;
    this.onInput(files);
    this.fileLoaded = URL.createObjectURL(file);
  };

  /**
   * checks if file is image
   * checks if file type is allowed
   */
  validateImage = file => {
    const { type = {} } = file;
    return file && type.split('/')[0] === 'image' && acceptedImageTypes.includes(type);
  };
}
