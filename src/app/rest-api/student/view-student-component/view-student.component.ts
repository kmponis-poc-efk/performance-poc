import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { RestApiService } from '../../rest-api.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {
  addStudentComponentUrl: string;
  editStudentComponentUrl: string;
  title: string;
  searchStudentInput: string;
  students: Student[];

  constructor(private restApiService: RestApiService, 
    private studentService: StudentService) { }
  
  ngOnInit() {
    this.addStudentComponentUrl = 'restApi/student/addStudent';
    this.editStudentComponentUrl = 'restApi/student/editStudent';
    this.title = 'View Student: ';
    this.searchStudentInput = ''; 

    this.studentService.findAll()
      .subscribe(responce => this.students = responce as Student[]);
  }

  addStudent(): void {
    console.log("Click button '(ViewStudentComponent)Add student'");
    this.restApiService.navigateTo(this.addStudentComponentUrl, null);
  }

  editStudent(studentId: string): void {
    console.log("Click button '(ViewStudentComponent)Edit'");
    this.restApiService.navigateTo(this.editStudentComponentUrl, studentId);
  }

  searchStudent(): void {
    console.log("Click button '(ViewStudentComponent)Search (By Name)'");
    if (this.searchStudentInput != '') {
      this.studentService.findByName(this.searchStudentInput)
        .subscribe(responce => this.students = responce as Student[]);
    } else {
      this.studentService.findAll()
        .subscribe(responce => this.students = responce as Student[]);
    }
  }
}
