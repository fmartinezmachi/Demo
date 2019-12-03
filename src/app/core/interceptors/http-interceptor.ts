import { finalize, tap } from 'rxjs/operators';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class HTTPStatus {
  private requestInFlight$: BehaviorSubject<boolean>;
  constructor() {
    this.requestInFlight$ = new BehaviorSubject(false);
  }

  setHttpStatus(inFlight: boolean) {
    this.requestInFlight$.next(inFlight);
  }

  getHttpStatus(): Observable<boolean> {
    return this.requestInFlight$.asObservable();
  }
}

@Injectable()
export class HTTPListener implements HttpInterceptor {
  count = 0;

  constructor(private status: HTTPStatus) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.count++;
    this.status.setHttpStatus(true);
    return next.handle(req).pipe(
      tap(
        event => {
          // uncomment for development purposes only
          // console.log(event)
        },
        error => {
          // uncomment for development purposes only
          // console.log(error)
        },
      ),
      finalize(() => {
        this.count--;
        if (this.count === 0) {
          this.status.setHttpStatus(false);
        }
      }),
    );
  }
}
