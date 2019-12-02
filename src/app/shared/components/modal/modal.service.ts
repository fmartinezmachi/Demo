import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private isVisible = false;
  private visible = new BehaviorSubject<boolean>(false);
  visible$ = this.visible.asObservable();

  constructor() {}

  getScrollbarWidth = () => {
    return window.innerWidth - document.documentElement.clientWidth;
  };

  /**
   * blocks scroll and emulates scroll width to prevent tricky behaviours
   */
  toggleScroll = () => {
    const body = document.querySelector('body');
    if (body) {
      const styles = this.isVisible
        ? `overflow:hidden;width:calc(100% - ${this.getScrollbarWidth()}px)`
        : '';
      body.setAttribute('style', styles);
    }
  };

  toggleVisibility = () => {
    this.isVisible = !this.isVisible;
    this.toggleScroll();
    this.visible.next(this.isVisible);
  };
}
