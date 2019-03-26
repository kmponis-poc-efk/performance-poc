import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
import { ViewCourseComponent } from '../view-course-component/view-course.component';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {
  @Input() courses: Course[];
  public headersList: any;

  constructor(private viewCourseComponent: ViewCourseComponent) { }

  ngOnInit() { 
    this.setHeaders();
  }

  setHeaders(): void{
    this.headersList = ["Name", "Description", ""];
  }
}
