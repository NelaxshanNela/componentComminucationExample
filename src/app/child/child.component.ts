import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html'
})
export class ChildComponent {
  counter: number = 0;

  constructor(private sharedService: SharedService) {
    this.sharedService.counter$.subscribe(count => this.counter = count);
  }

  viewCounter() {
    alert(`Current Counter: ${this.counter}`);
  }
}
