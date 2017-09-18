import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoadingService {
  loadingStart = new Subject();
  loadingEnd = new Subject();
  private observables: Observable<any>[] = [];

  constructor() { }

  start(observable: Observable<any>): void {
    this.observables.push(observable);
    observable.subscribe(x => {
      const index = this.observables.indexOf(observable);
      this.observables.splice(index, 1);

      if (!this.isLoading) {
        this.loadingEnd.next();
      }
    });

    if (this.observables.length >= 0) {
      this.loadingStart.next();
    }
  }

  get isLoading(): boolean {
    return this.observables.length > 0;
  }
}
