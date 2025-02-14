import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-sibling',
  standalone: false,
  templateUrl: './sibling.component.html'
})
export class SiblingComponent {
  counter: number = 0;

  constructor(private sharedService: SharedService) {
    this.sharedService.counter$.subscribe(count => this.counter = count);
  }
}