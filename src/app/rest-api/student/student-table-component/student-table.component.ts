import { Component, OnInit, Input } from '@angular/core';
import { ViewStudentComponent } from '../view-student-component/view-student.component';
import { Student } from '../student';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
  @Input() students: Student[];
  public headersList: any;

  constructor(private viewStudentComponent: ViewStudentComponent) { }

  ngOnInit() { 
    this.setHeaders();
  }

  setHeaders(): void{
    this.headersList = ["First Name", "Last Name", "Phone", "Email", "Course Name", ""];
  }
}
