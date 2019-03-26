import { Component } from '@angular/core';

@Component({
  selector: 'app-innersource',
  templateUrl: './innersource.component.html',
  styleUrls: ['./innersource.component.css']
})
export class InnersourceComponent {
  title: string;

  constructor() { }
 
  ngOnInit() { 
    this.title = "Innersource Guide: ";
  }
}
