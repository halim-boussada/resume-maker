import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { FormsModule } from "@angular/forms";
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [AppComponent, ResumeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
