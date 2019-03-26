import { Component, Input } from '@angular/core';
import { Student } from '../student';
import { Course } from '../../course/course';
import { CourseService } from '../../course/course.service';

@Component({
  selector: 'app-student-input-fields',
  templateUrl: './student-input-fields.component.html',
  styleUrls: ['./student-input-fields.component.css']
})
export class StudentInputFieldsComponent {
  @Input() student: Student;
  courses: Course[];

  constructor(private courseService: CourseService) { }
 
  ngOnInit() { 
    this.getCoursesList();
  }

  getCoursesList(): void {
    this.courseService.findAll()
        .subscribe(responce => this.courses = responce as Course[]);
  }  
}
