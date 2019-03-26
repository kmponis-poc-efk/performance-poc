import { Component, Input } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { RestApiService } from '../../rest-api.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {
  viewStudentComponentUrl: string;
  title: string;
  backButton: string;
  updateButton: string;
  deleteButton: string;
  student: Student;

  constructor(private restApiService: RestApiService,
    private studentService: StudentService) { }
 
  ngOnInit() { 
    this.viewStudentComponentUrl = 'restApi/student/viewStudent';
    this.title = 'Edit Student: ';
    this.backButton = 'Back';
    this.updateButton = 'Update';
    this.deleteButton = 'Delete';
    this.student = new Student;
    this.student.courseIds = [""];

    let studentId = this.restApiService.params;
    if (null != studentId) {
      this.studentService.findByStudentId(studentId)
        .subscribe(responce => this.student = responce as Student);
    }
  }

  update(): void { 
    console.log("Click button '(EditStudentComponent)Update'");
    this.studentService.update(this.student)
      .subscribe();
    this.restApiService.navigateTo(this.viewStudentComponentUrl, null)
  }

  delete(studentId: string): void {
    console.log("Click button '(EditStudentComponent)Delete'");
    this.studentService.delete(studentId)
      .subscribe();
    this.restApiService.navigateTo(this.viewStudentComponentUrl, null)
  }

  back(): void {
    console.log("Click button '(EditStudentComponent)Back'");
    this.restApiService.navigateTo(this.viewStudentComponentUrl, null)
  }
}
