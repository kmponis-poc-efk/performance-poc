import { Component } from '@angular/core';

@Component({
  selector: 'app-twitter-tutorial',
  templateUrl: './twitter-tutorial.component.html',
  styleUrls: ['./twitter-tutorial.component.css']
})
export class TwitterTutorialComponent {
  title: string;
  
  constructor() { }
 
  ngOnInit() { 
    this.title = "Twitter Tutorial: ";
  }
}
