import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { environment } from "../../environments/environment";
@Component({
  selector: "app-coaches-list",
  templateUrl: "./coaches-list.component.html",
  styleUrls: ["./coaches-list.component.css"],
})
export class CoachesListComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  coaches: any;
  ngOnInit(): void {
    this.http
      .post(`${environment.URL}/api/getAllCoaches`, {
        responseType: "json",
      })
      .subscribe((data) => {
        console.log(data);
        this.coaches = data;
      });
  }
  goToOneCoatch(id) {
    localStorage.setItem("coachId", id);
    this.router.navigateByUrl("/oneCoach");
  }
}
