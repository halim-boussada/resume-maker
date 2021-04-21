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

@NgModule({
  declarations: [AppComponent, ResumeComponent, CoachesListComponent, OneCoacheComponent, MotivationLetterComponent, NotificationComponent, NavbarUserComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
