import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { environment } from "../../environments/environment";
@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"],
})
export class NotificationComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  notifications: any;

  ngOnInit(): void {
    var id = localStorage.getItem("id");
    this.http
      .post(`${environment.URL}/api/getFeedback/user/${id}`, {
        responseType: "json",
      })
      .subscribe((data) => {
        console.log(data);
        this.notifications = data;
      });
  }
}
