import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../course';
import { RestApiService } from '../../rest-api.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent {
  addCourseComponentUrl: string;
  editCourseComponentUrl: string;
  title: string;
  searchCourseInput: string;
  courses: Course[];

  constructor(private restApiService: RestApiService,
    private courseService: CourseService) { }
  
  ngOnInit() {
    this.addCourseComponentUrl = 'restApi/course/addCourse';
    this.editCourseComponentUrl = 'restApi/course/editCourse';
    this.title = 'View Course: ';
    this.searchCourseInput = ''; 

    this.courseService.findAll()
      .subscribe(responce => this.courses = responce as Course[]);
  }

  addCourse(): void {
    console.log("Click button '(ViewCourseComponent)Add course'");
    this.restApiService.navigateTo(this.addCourseComponentUrl, null);
  }

  editCourse(courseId: string): void {
    console.log("Click button '(ViewCourseComponent)Edit'");
    this.restApiService.navigateTo(this.editCourseComponentUrl, courseId);
  }

  searchCourse(): void {
    console.log("Click button '(ViewCourseComponent)Search (By Name)'");
    if (this.searchCourseInput != '') {
      this.courseService.findByName(this.searchCourseInput)
        .subscribe(responce => this.courses = responce as Course[]);
    } else {
      this.courseService.findAll()
        .subscribe(responce => this.courses = responce as Course[]);
    }
  }
}
