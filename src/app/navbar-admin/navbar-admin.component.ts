import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-navbar-admin",
  templateUrl: "./navbar-admin.component.html",
  styleUrls: ["./navbar-admin.component.css"],
})
export class NavbarAdminComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  addCoaches() {
    this.router.navigateByUrl("/addCoache");
  }
  manageCoaches() {
    this.router.navigateByUrl("/manegeCoaches");
  }
  manageUsers() {
    this.router.navigateByUrl("/manegeUsers");
  }
}
