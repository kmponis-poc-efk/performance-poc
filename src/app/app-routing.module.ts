import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-component/home.component';
import { AngularComponent } from './learning/angular-component/angular.component';
import { InnersourceComponent } from './learning/innersource-component/innersource.component';
import { InnershiftComponent } from './learning/innershift-component/innershift.component';
import { TwitterTutorialComponent } from './learning/twitter-tutorial-component/twitter-tutorial.component';
import { ViewStudentComponent } from './rest-api/student/view-student-component/view-student.component';
import { AddStudentComponent } from './rest-api/student/add-student-component/add-student.component';
import { EditStudentComponent } from './rest-api/student/edit-student-component/edit-student.component';
import { TwitterFeedbackComponent } from './twitter/twitter-feedback-component/twitter-feedback.component';
import { ViewCourseComponent } from './rest-api/course/view-course-component/view-course.component';
import { AddCourseComponent } from './rest-api/course/add-course-component/add-course.component';
import { EditCourseComponent } from './rest-api/course/edit-course-component/edit-course.component';
import { ViewAdminComponent } from './rest-api/admin/view-admin-component/view-admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'learning', component: AngularComponent },
  { path: 'learning/angular', component: AngularComponent },
  { path: 'learning/innersource', component: InnersourceComponent },
  { path: 'learning/innershift', component: InnershiftComponent },
  { path: 'learning/twitter/tutorial', component: TwitterTutorialComponent },
  { path: 'restApi/admin', component: ViewAdminComponent },
  { path: 'restApi/student', component: ViewStudentComponent },
  { path: 'restApi/student/viewStudent', component: ViewStudentComponent },
  { path: 'restApi/student/addStudent', component: AddStudentComponent },
  { path: 'restApi/student/editStudent', component: EditStudentComponent },
  { path: 'restApi/course', component: ViewCourseComponent },
  { path: 'restApi/course/viewCourse', component: ViewCourseComponent },
  { path: 'restApi/course/addCourse', component: AddCourseComponent },
  { path: 'restApi/course/editCourse', component: EditCourseComponent },
  { path: 'twitter/feedback', component: TwitterFeedbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
