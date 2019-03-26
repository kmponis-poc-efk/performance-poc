import { Component, Input } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-name',
  templateUrl: './course-name.component.html',
  styleUrls: ['./course-name.component.css']
})
export class CourseNameComponent {
  @Input() courseIds: string[]; 
  courseNames: string;

  constructor(private courseService: CourseService) {  }
  
  ngOnInit() {
    this.courseService.findCourseIdsName(this.courseIds)
          .subscribe(responce => this.courseNames = responce);
  }
}
