import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";
@Component({
  selector: "app-add-coach",
  templateUrl: "./add-coach.component.html",
  styleUrls: ["./add-coach.component.css"],
})
export class AddCoachComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {}
  addCoache(username, password) {
    var obj = {
      username: username,
      password: password,
    };
    this.http
      .post(`${environment.URL}/api/coache`, obj, {
        responseType: "text",
      })
      .subscribe((data) => {
        alert("The coach is added");
      });
    console.log(obj);
  }
}
