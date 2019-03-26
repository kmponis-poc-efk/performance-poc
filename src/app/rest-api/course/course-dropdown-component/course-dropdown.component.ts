import { Component, Input } from '@angular/core';
import { Course } from '../course';
import { Student } from '../../student/student';

@Component({
  selector: 'app-course-dropdown',
  templateUrl: './course-dropdown.component.html',
  styleUrls: ['./course-dropdown.component.css']
})
export class CourseDropdownComponent {
  @Input() student: Student; 
  @Input() courses: Course[];
  @Input() numberOfCourses: string[]; 

  constructor() { }
  
  ngOnInit() { 
  }

  addCourse(): void {
    // this.numberOfCourses.push("");
    let currentLength = this.numberOfCourses.length;
    this.numberOfCourses.length = currentLength + 1;
  }

  deleteCourse(): void {
    // this.numberOfCourses.pop();
    let currentLength = this.numberOfCourses.length;
    if (currentLength > 1) {
      this.numberOfCourses.length = currentLength - 1;
    }
  }
}