import { Component } from '@angular/core';
import { RestApiService } from '../rest-api/rest-api.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {
  viewAdminComponentUrl: string;
  viewStudentComponentUrl: string;
  viewCourseComponentUrl: string;
  resetButton: string;
  sessionId: string;
  sessionUser: string;
  adminUser: string;
  professorUser: string;
  studentUser: string;
  
  constructor(private restApiService: RestApiService) { }
 
  ngOnInit() {
    this.viewAdminComponentUrl = 'restApi/admin';
    this.viewStudentComponentUrl = 'restApi/student';
    this.viewCourseComponentUrl = 'restApi/course';
    this.resetButton = 'Reset';
    this.adminUser = 'admin';
    this.professorUser = 'professor';
    this.studentUser = 'student';

    this.getSessionId();
    this.getSessionUser();
  }

  getSessionId(): void {
    if (sessionStorage.getItem("sessionId") == null) {
      this.setSessionId();
    } else {
      this.sessionId = sessionStorage.getItem("sessionId");
    }
  }

  setSessionId(): void {
    this.sessionId = this.sessionIdGenerator();
    sessionStorage.setItem("sessionId", this.sessionId);
  }

  getSessionUser(): void {
    if (sessionStorage.getItem("sessionUser") == null) {
      this.setSessionUser();
    } else {
      this.sessionUser = sessionStorage.getItem("sessionUser");
    }
  }

  setSessionUser(): string {
    var admin = this.sessionId.match(/[0-4]+$/);
    var professor = this.sessionId.match(/[5-9]+$/);
    if (admin) {
      this.sessionUser = this.adminUser;  
    } else if (professor) {
      this.sessionUser = this.professorUser;  
    } else {
      this.sessionUser = this.studentUser;
    }
    sessionStorage.setItem("sessionUser", this.sessionUser);
    return this.sessionUser;
  }

  reset(): void {
    console.log("Click button '(SessionComponent)Reset'");
    sessionStorage.removeItem("sessionId");
    sessionStorage.removeItem("sessionUser");
    this.setSessionId();
    var sessionUser = this.setSessionUser();
    if (sessionUser == this.adminUser) {
      this.restApiService.navigateTo(this.viewAdminComponentUrl, null);
    } else if (sessionUser == this.professorUser) {
      this.restApiService.navigateTo(this.viewCourseComponentUrl, null);
    } else if (sessionUser == this.studentUser) {
      this.restApiService.navigateTo(this.viewStudentComponentUrl, null);
    }
  }

  /**
   * Method to generate a random session id.
   */
  private sessionIdGenerator(): string {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return S4()+S4()+"-"+S4();
  }
}
