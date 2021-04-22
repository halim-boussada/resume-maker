import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { CheckUserProfileComponent } from "./check-user-profile/check-user-profile.component";
import { CoacheHomeComponent } from "./coache-home/coache-home.component";
import { CoachesListComponent } from "./coaches-list/coaches-list.component";
import { FeedbackComponent } from "./feedback/feedback.component";
import { FormComponent } from "./form/form.component";
import { HomeComponent } from "./home/home.component";
import { MotivationLetterComponent } from "./motivation-letter/motivation-letter.component";
import { NotificationComponent } from "./notification/notification.component";
import { OneCoacheComponent } from "./one-coache/one-coache.component";
import { RequestsListComponent } from "./requests-list/requests-list.component";
import { ResumeComponent } from "./resume/resume.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "form", component: FormComponent },
  { path: "resume", component: ResumeComponent },
  { path: "coachList", component: CoachesListComponent },
  { path: "motivationLetter", component: MotivationLetterComponent },
  { path: "notifications", component: NotificationComponent },
  { path: "loginAdmin", component: AdminComponent },
  { path: "oneCoach", component: OneCoacheComponent },
  { path: "homeCoach", component: CoacheHomeComponent },
  { path: "requests", component: RequestsListComponent },
  { path: "check", component: CheckUserProfileComponent },
  { path: "feed", component: FeedbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
