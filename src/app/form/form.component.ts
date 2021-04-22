import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}
  imageUrl: string;

  signUp(n, p, rp) {
    if (p === rp) {
      var obj = {
        name: n,
        password: p,
      };
      this.http
        .post(`${environment.URL}/api/admin`, obj, {
          responseType: "text",
        })
        .subscribe((data) => {
          alert("welcom");
        });
    } else {
      alert("wrong password");
    }

    console.log(obj);
  }
  signIn(password) {
    this.http
      .post(`${environment.URL}/api/user/${password}`, {
        responseType: "text",
      })
      .subscribe((data) => {
        if (data) {
          var d = data["_id"];
          localStorage.setItem("id", d);
          this.router.navigateByUrl("/resume");
        } else {
          alert("wrong passwor");
        }
      });
  }
}
