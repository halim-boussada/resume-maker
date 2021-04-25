import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";
@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
})
export class AdminComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {}
  //Admin login
  login(admin, password) {
    if (admin === "admin" && password === "admin") {
      this.router.navigateByUrl("/addCoache");
    } else {
      alert("Username Or Password Wrong");
    }
  }
}
