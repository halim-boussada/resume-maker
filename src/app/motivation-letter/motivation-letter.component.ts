import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { environment } from "../../environments/environment";
@Component({
  selector: "app-motivation-letter",
  templateUrl: "./motivation-letter.component.html",
  styleUrls: ["./motivation-letter.component.css"],
})
export class MotivationLetterComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  add: any = false;
  mls: any;
  ngOnInit(): void {
    var id = localStorage.getItem("id");
    this.http
      .post(`${environment.URL}/api/motivation/${id}`, {
        responseType: "json",
      })
      .subscribe((data) => {
        console.log(data);
        this.mls = data;
      });
  }
  addMl() {
    var r = !this.add;
    this.add = r;
  }
  addMotivation(header, body) {
    var id = localStorage.getItem("id");
    var obj = {
      userId: id,
      header: header,
      body: body,
    };
    this.http
      .post(`${environment.URL}/api/motivation`, obj, {
        responseType: "json",
      })
      .subscribe((data) => {
        alert("done");
        this.addMl();
        this.ngOnInit();
      });
  }
  oneMl(id) {
    localStorage.setItem("oneMl", id);
    this.router.navigateByUrl("/oneMl");
  }
  delete(id) {
    this.http
      .delete(`${environment.URL}/api/motivation/${id}`, {
        responseType: "json",
      })
      .subscribe((data) => {
        alert("deleted");
        this.ngOnInit();
      });
  }
}
