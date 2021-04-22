import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { FormsModule } from "@angular/forms";
import { ResumeComponent } from './resume/resume.component';
import { CoachesListComponent } from './coaches-list/coaches-list.component';
import { OneCoacheComponent } from './one-coache/one-coache.component';
import { MotivationLetterComponent } from './motivation-letter/motivation-letter.component';
import { NotificationComponent } from './notification/notification.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { AdminComponent } from './admin/admin.component';
import { AddCoachComponent } from './add-coach/add-coach.component';
import { ManegeUsersComponent } from './manege-users/manege-users.component';
import { ManegeCoachesComponent } from './manege-coaches/manege-coaches.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { CoacheHomeComponent } from './coache-home/coache-home.component';
import { RequestsListComponent } from './requests-list/requests-list.component';
import { CheckUserProfileComponent } from './check-user-profile/check-user-profile.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [AppComponent, ResumeComponent, CoachesListComponent, OneCoacheComponent, MotivationLetterComponent, NotificationComponent, NavbarUserComponent, AdminComponent, AddCoachComponent, ManegeUsersComponent, ManegeCoachesComponent, NavbarAdminComponent, CoacheHomeComponent, RequestsListComponent, CheckUserProfileComponent, FeedbackComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
