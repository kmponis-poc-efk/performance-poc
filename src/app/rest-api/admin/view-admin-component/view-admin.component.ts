import { Component } from '@angular/core';
import { CourseService } from '../../course/course.service';
import { StudentService } from '../../student/student.service';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent {
  viewStudentComponentUrl: string;
  viewCourseComponentUrl: string;
  title: string;
  initialiseStudentsButton: string;
  initialiseCoursesButton: string;

  constructor(private studentService: StudentService,
    private courseService: CourseService) { }
  
  ngOnInit() {
    this.viewStudentComponentUrl = 'restApi/student/';
    this.viewCourseComponentUrl = 'restApi/course/';
    this.title = 'Admin Menu: ';
    this.initialiseStudentsButton = 'Initialise students database';
    this.initialiseCoursesButton = 'Initialise courses database';
  }

  initialiseStudents(): void {
    console.log("Click button '(ViewAdminComponent)Initialise students database'");
    this.studentService.initialiseStudents()
      .subscribe();
  }

  initialiseCourses(): void {
    console.log("Click button '(ViewAdminComponent)Initialise courses database'");
    this.courseService.initialiseCourses()
      .subscribe();
  }
}
