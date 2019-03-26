import { Component } from '@angular/core';

@Component({
  selector: 'app-twitter-feedback',
  templateUrl: './twitter-feedback.component.html',
  styleUrls: ['./twitter-feedback.component.css']
})
export class TwitterFeedbackComponent {
  title: string;

  constructor() { }
 
  ngOnInit() { 
    this.title = "Feedback: ";
  }
}
