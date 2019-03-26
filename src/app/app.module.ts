import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RestApiModule } from './rest-api/rest-api.module';
import { LearningModule } from './learning/learning.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-component/home.component';
import { SessionComponent } from './session-component/session.component';
import { TwitterFeedbackComponent } from './twitter/twitter-feedback-component/twitter-feedback.component';

// 'Parent' of all modules
@NgModule({
  // Imports 'modules'
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestApiModule,
    LearningModule
  ],
  // Declares 'components'
  declarations: [
    AppComponent,
    HomeComponent,
    SessionComponent,
    TwitterFeedbackComponent
  ],
  // Starts application from this 'component'
  bootstrap: [AppComponent]
})
export class AppModule { }
