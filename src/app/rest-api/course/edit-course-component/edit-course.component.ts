import { Component, Input } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { StudentService } from '../../student/student.service';
import { RestApiService } from '../../rest-api.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent {
  viewCourseComponentUrl: string;
  title: string;
  backButton: string;
  updateButton: string;
  deleteButton: string;
  course: Course;

  constructor(private restApiService: RestApiService, 
    private courseService: CourseService, 
    private studentService: StudentService) { }
 
  ngOnInit() { 
    this.viewCourseComponentUrl = 'restApi/course/viewCourse';
    this.title = 'Edit Course: ';
    this.backButton = 'Back';
    this.updateButton = 'Update';
    this.deleteButton = 'Delete';
    this.course = new Course;

    let courseId = this.restApiService.params;
    if (null != courseId) {
      this.courseService.findByCourseId(courseId)
        .subscribe(responce => this.course = responce as Course);
    }
  }

  update(): void { 
    console.log("Click button '(EditCourseComponent)Update'");
    this.courseService.update(this.course)
      .subscribe();
    this.restApiService.navigateTo(this.viewCourseComponentUrl, null)
  }

  delete(courseId: string): void {
    console.log("Click button '(EditCourseComponent)Delete'");
    this.courseService.delete(courseId)
      .subscribe();
    this.studentService.removeCourseId(courseId)
      .subscribe();
    this.restApiService.navigateTo(this.viewCourseComponentUrl, null)
  }

  back(): void {
    console.log("Click button '(EditCourseComponent)Back'");
    this.restApiService.navigateTo(this.viewCourseComponentUrl, null)
  }
}
