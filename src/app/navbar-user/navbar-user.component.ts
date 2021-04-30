import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { environment } from "../../environments/environment";
@Component({
  selector: "app-navbar-user",
  templateUrl: "./navbar-user.component.html",
  styleUrls: ["./navbar-user.component.css"],
})
export class NavbarUserComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  n: any;
  ngOnInit(): void {
    var id = localStorage.getItem("id");
    this.http
      .post(`${environment.URL}/api/number/user/${id}`, {
        responseType: "json",
      })
      .subscribe((data) => {
        console.log(data);
        this.n = data["number"];
      });
  }
  profile() {
    this.router.navigateByUrl("/resume");
  }
  motivation() {
    this.router.navigateByUrl("/motivationLetter");
  }
  coach() {
    this.router.navigateByUrl("/coachList");
  }
  notif() {
    var id = localStorage.getItem("id");
    this.http
      .put(`${environment.URL}/api/rezero/${id}`, {
        responseType: "json",
      })
      .subscribe((data) => {
        console.log(data);
      });
    this.router.navigateByUrl("/notifications");
  }
  archive() {
    this.router.navigateByUrl("/requestArchieve");
  }
  open() {
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    navLinks.classList.toggle("open");
    links.forEach((link) => {
      link.classList.toggle("fade");
    });
  }
}
