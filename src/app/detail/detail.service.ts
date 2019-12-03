import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { detailHeader, detailSections } from '@mocks/detail';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  constructor() {}

  getDetailHeaderData(): Observable<any> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(detailHeader);
      }, 1000);
    });
  }

  getDetailSectionsData(): Observable<any> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(detailSections);
      }, 3000);
    });
  }
}
