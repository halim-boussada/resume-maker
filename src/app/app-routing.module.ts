import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddCoachComponent } from "./add-coach/add-coach.component";
import { AddUserDataComponent } from "./add-user-data/add-user-data.component";
import { AdminComponent } from "./admin/admin.component";
import { CheckUserProfileComponent } from "./check-user-profile/check-user-profile.component";
import { CoacheHomeComponent } from "./coache-home/coache-home.component";
import { CoachesListComponent } from "./coaches-list/coaches-list.component";
import { DownloadResumeComponent } from "./download-resume/download-resume.component";
import { FeedbackComponent } from "./feedback/feedback.component";
import { FormComponent } from "./form/form.component";
import { HomeComponent } from "./home/home.component";
import { ManegeCoachesComponent } from "./manege-coaches/manege-coaches.component";
import { ManegeUsersComponent } from "./manege-users/manege-users.component";
import { MotivationLetterComponent } from "./motivation-letter/motivation-letter.component";
import { NotificationComponent } from "./notification/notification.component";
import { OneCoacheComponent } from "./one-coache/one-coache.component";
import { OneMlComponent } from "./one-ml/one-ml.component";
import { RequestArchieveComponent } from "./request-archieve/request-archieve.component";
import { RequestsListComponent } from "./requests-list/requests-list.component";
import { ResumeComponent } from "./resume/resume.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "form", component: FormComponent },
  { path: "resume", component: ResumeComponent },
  { path: "coachList", component: CoachesListComponent },
  { path: "motivationLetter", component: MotivationLetterComponent },
  { path: "notifications", component: NotificationComponent },
  { path: "oneCoach", component: OneCoacheComponent },
  { path: "homeCoach", component: CoacheHomeComponent },
  { path: "requests", component: RequestsListComponent },
  { path: "check", component: CheckUserProfileComponent },
  { path: "feed", component: FeedbackComponent },
  { path: "adminLogin", component: AdminComponent },
  { path: "addCoache", component: AddCoachComponent },
  { path: "manegeCoaches", component: ManegeCoachesComponent },
  { path: "manegeUsers", component: ManegeUsersComponent },
  { path: "oneMl", component: OneMlComponent },
  { path: "requestArchieve", component: RequestArchieveComponent },
  { path: "addData", component: AddUserDataComponent },
  { path: "dResume", component: DownloadResumeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
