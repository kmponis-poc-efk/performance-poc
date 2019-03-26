import { Component } from '@angular/core';

@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.css']
})
export class RestApiComponent {
  adminLink: string;
  studentLink: string;
  courseLink: string;

  constructor() { }
 
  ngOnInit() { 
    this.adminLink = 'Admin';
    this.studentLink = 'Student';
    this.courseLink = 'Course';
  }

  getSessionUser(): string {
    return sessionStorage.getItem("sessionUser");
  }
}
