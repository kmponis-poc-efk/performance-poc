import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  homeLink: string;
  learningLink: string;
  restApiLink: string;
  twitterLink: string;

  constructor() { }
 
  ngOnInit() { 
    this.title = 'Digitlab Welcome Screen learning';
    this.homeLink = 'Home';
    this.learningLink = 'Learning';
    this.restApiLink = 'Rest Api';
    this.twitterLink = 'Twitter';
  }
}
