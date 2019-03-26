import { Component } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { RestApiService } from '../../rest-api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  viewCourseComponentUrl: string;
  title: string;
  saveButton: string;
  backButton: string;
  course: Course;

  constructor(private restApiService: RestApiService, 
    private courseService: CourseService) { }
 
  ngOnInit() { 
    this.viewCourseComponentUrl = 'restApi/course/viewCourse';
    this.title = 'Add Course: ';
    this.saveButton = 'Save';
    this.backButton = 'Back';
    this.course = new Course;
  }

  save(): void { 
    console.log("Click button '(AddCourseComponent)Save'");
    this.courseService.create(this.course)
      .subscribe();
    this.restApiService.navigateTo(this.viewCourseComponentUrl, null);
  }

  back(): void {
    console.log("Click button '(AddCourseComponent)Back'");
    this.restApiService.navigateTo(this.viewCourseComponentUrl, null)
  }
}
