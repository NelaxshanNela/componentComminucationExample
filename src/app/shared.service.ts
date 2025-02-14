import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class SharedService {
  private counterSource = new BehaviorSubject<number>(0);
  counter$ = this.counterSource.asObservable();

  updateCounter(value: number) {
    this.counterSource.next(value);
  }
}