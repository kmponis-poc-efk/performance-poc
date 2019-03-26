import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StudentService } from './student/student.service';
import { ViewStudentComponent } from './student/view-student-component/view-student.component';
import { AddStudentComponent } from './student/add-student-component/add-student.component';
import { EditStudentComponent } from './student/edit-student-component/edit-student.component';
import { CourseService } from './course/course.service';
import { CourseNameComponent } from './course/course-name-component/course-name.component';
import { CourseDropdownComponent } from './course/course-dropdown-component/course-dropdown.component';
import { StudentInputFieldsComponent } from './student/student-input-fields-component/student-input-fields.component';
import { StudentTableComponent } from './student/student-table-component/student-table.component';
import { RestApiComponent } from './rest-api-component/rest-api.component';
import { ViewCourseComponent } from './course/view-course-component/view-course.component';
import { AppRoutingModule } from '../app-routing.module';
import { CourseTableComponent } from './course/course-table-component/course-table.component';
import { CourseInputFieldsComponent } from './course/course-input-fields-component/course-input-fields.component';
import { EditCourseComponent } from './course/edit-course-component/edit-course.component';
import { AddCourseComponent } from './course/add-course-component/add-course.component';
import { RestApiService } from './rest-api.service';
import { ViewAdminComponent } from './admin/view-admin-component/view-admin.component';

// 'Parent' is app.module.ts, imports this one
@NgModule({
  // Imports 'modules' that declarations[] need
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    // TODO implement different routing for rest-api components
    // RestApiRoutingModule, 
    FormsModule
  ],
  // Declares 'components', do not declare them on 'parent'
  // again, just export them to it from below
  declarations: [
    RestApiComponent,
    ViewAdminComponent,
    ViewStudentComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentTableComponent,
    StudentInputFieldsComponent,
    CourseNameComponent,
    CourseDropdownComponent,
    ViewCourseComponent,
    AddCourseComponent,
    EditCourseComponent,
    CourseTableComponent,
    CourseInputFieldsComponent
  ],
  // Exports 'components' to 'parent'
  exports: [
    RestApiComponent,
    ViewAdminComponent,
    ViewStudentComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentTableComponent,
    StudentInputFieldsComponent,
    CourseNameComponent,
    CourseDropdownComponent,
    ViewCourseComponent,
    AddCourseComponent,
    EditCourseComponent,
    CourseTableComponent,
    CourseInputFieldsComponent
  ],
  // Provides 'components' services
  providers: [
    RestApiService,
    StudentService, 
    CourseService
  ]
})
export class RestApiModule { }
