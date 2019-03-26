import { Component, Input } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-input-fields',
  templateUrl: './course-input-fields.component.html',
  styleUrls: ['./course-input-fields.component.css']
})
export class CourseInputFieldsComponent {
  @Input() course: Course;

  constructor() { }
 
  ngOnInit() { }
}
