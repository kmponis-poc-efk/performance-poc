import { Component } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent {
  angularLink: string;
  innersourceLink: string;
  innershiftLink: string;
  twitterTutorialLink: string;

  constructor() { }
 
  ngOnInit() { 
    this.angularLink = 'Angular';
    this.innersourceLink = 'Innersource';
    this.innershiftLink = 'Innershift';
    this.twitterTutorialLink = 'Twitter';
  }
}
