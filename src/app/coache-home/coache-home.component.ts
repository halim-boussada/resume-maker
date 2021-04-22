import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { environment } from "../../environments/environment";
@Component({
  selector: "app-coache-home",
  templateUrl: "./coache-home.component.html",
  styleUrls: ["./coache-home.component.css"],
})
export class CoacheHomeComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}
  signIn(password) {
    this.http
      .post(`${environment.URL}/api/coach/${password}`, {
        responseType: "text",
      })
      .subscribe((data) => {
        if (data) {
          var d = data["_id"];
          localStorage.setItem("loginCoachId", d);
          this.router.navigateByUrl("/requests");
        } else {
          alert("wrong passwor");
        }
      });
  }
}
