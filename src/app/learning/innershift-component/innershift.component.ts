import { Component } from '@angular/core';

@Component({
  selector: 'app-innershift',
  templateUrl: './innershift.component.html',
  styleUrls: ['./innershift.component.css']
})
export class InnershiftComponent {
  title: string;

  constructor() { }
 
  ngOnInit() { 
    this.title = 'Migrate with Innershift ';
  }
}
