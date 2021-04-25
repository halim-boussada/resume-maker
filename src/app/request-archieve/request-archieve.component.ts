import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";
@Component({
  selector: "app-request-archieve",
  templateUrl: "./request-archieve.component.html",
  styleUrls: ["./request-archieve.component.css"],
})
export class RequestArchieveComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  list: any;
  ngOnInit(): void {
    var id = localStorage.getItem("id");
    this.http
      .post(`${environment.URL}/api/getrequest/user/${id}`, {
        responseType: "json",
      })
      .subscribe((data) => {
        console.log(data);
        this.list = data;
      });
  }
}
