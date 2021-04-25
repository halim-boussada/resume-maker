import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar-user",
  templateUrl: "./navbar-user.component.html",
  styleUrls: ["./navbar-user.component.css"],
})
export class NavbarUserComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
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
