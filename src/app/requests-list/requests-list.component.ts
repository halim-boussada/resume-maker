import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { environment } from "../../environments/environment";
@Component({
  selector: "app-requests-list",
  templateUrl: "./requests-list.component.html",
  styleUrls: ["./requests-list.component.css"],
})
export class RequestsListComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  list: any;
  ngOnInit(): void {
    var id = localStorage.getItem("loginCoachId");
    this.http
      .post(`${environment.URL}/api/getrequest/coach/${id}`, {
        responseType: "json",
      })
      .subscribe((data) => {
        console.log(data);
        this.list = data;
      });
  }
  gotoprofileUser(id) {
    localStorage.setItem("checkUser", id);
    this.router.navigateByUrl("/check");
  }
  goFeedback(id) {
    localStorage.setItem("onefeedback", id);
    this.router.navigateByUrl("/feed");
  }
}
