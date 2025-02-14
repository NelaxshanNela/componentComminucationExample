import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html'
})
export class ParentComponent {
  counter = 0;

  constructor(private sharedService: SharedService) {}

  increaseCounter() {
    this.counter++;
    this.sharedService.updateCounter(this.counter);
  }
}