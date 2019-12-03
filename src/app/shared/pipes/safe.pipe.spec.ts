import { SafePipe } from './safe.pipe';
import { DomSanitizer } from '@angular/platform-browser';

const sanitized: DomSanitizer = null;

describe('SafePipe', () => {
  it('create an instance', () => {
    const pipe = new SafePipe(sanitized);
    expect(pipe).toBeTruthy();
  });
});
