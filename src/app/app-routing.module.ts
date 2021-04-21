import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoachesListComponent } from "./coaches-list/coaches-list.component";
import { FormComponent } from "./form/form.component";
import { HomeComponent } from "./home/home.component";
import { MotivationLetterComponent } from "./motivation-letter/motivation-letter.component";
import { NotificationComponent } from "./notification/notification.component";
import { ResumeComponent } from "./resume/resume.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "form", component: FormComponent },
  { path: "resume", component: ResumeComponent },
  { path: "coachList", component: CoachesListComponent },
  { path: "motivationLetter", component: MotivationLetterComponent },
  { path: "notifications", component: NotificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
