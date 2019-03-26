import { Component } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent {
  title: string;

  constructor() { }
 
  ngOnInit() { 
    this.title = "Angular useful links: ";
  }
}
