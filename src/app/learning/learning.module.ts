import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { LearningComponent } from './learning-component/learning.component';
import { AngularComponent } from './angular-component/angular.component';
import { InnersourceComponent } from './innersource-component/innersource.component';
import { InnershiftComponent } from './innershift-component/innershift.component';
import { TwitterTutorialComponent } from './twitter-tutorial-component/twitter-tutorial.component';

// 'Parent' is app.module.ts, imports this one
@NgModule({
  // Imports 'modules' that declarations[] need
  imports: [
    AppRoutingModule
  ],
  // Declares 'components', do not declare them on 'parent'
  // again, just export them to it from below
  declarations: [
    LearningComponent,
    AngularComponent,
    InnersourceComponent,
    InnershiftComponent,
    TwitterTutorialComponent
  ],
  // Exports 'components' to 'parent'
  exports: [
    LearningComponent,
    AngularComponent,
    InnersourceComponent,
    InnershiftComponent,
    TwitterTutorialComponent
  ],
  // Provides 'components' services
  providers: [ ]
})
export class LearningModule { }
