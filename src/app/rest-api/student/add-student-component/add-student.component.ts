import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { RestApiService } from '../../rest-api.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  viewStudentComponentUrl: string;
  title: string;
  saveButton: string;
  backButton: string;
  student: Student;

  constructor(private restApiService: RestApiService,
    private studentService: StudentService) { }
 
  ngOnInit() { 
    this.viewStudentComponentUrl = 'restApi/student/viewStudent';
    this.title = 'Add Student: ';
    this.saveButton = 'Save';
    this.backButton = 'Back';
    this.student = new Student;
    this.student.courseIds = [""];
  }

  save(): void { 
    console.log("Click button '(AddStudentComponent)Save'");
    this.studentService.create(this.student)
      .subscribe();
    this.restApiService.navigateTo(this.viewStudentComponentUrl, null);
  }

  back(): void {
    console.log("Click button '(AddStudentComponent)Back'");
    this.restApiService.navigateTo(this.viewStudentComponentUrl, null)
  }
}
