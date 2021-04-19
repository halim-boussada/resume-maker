import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}
  imageUrl: string;
  // imgUpload(img) {
  //   console.log("IMG FROM VER==> ", img.target.files[0]);
  //   var formData = new FormData();
  //   formData.append("img", img.target.files[0]);
  //   this.http
  //     .post("https://halim-resume.herokuapp.com/upload", formData)
  //     .subscribe((resp) => {
  //       this.imageUrl = resp["msg"].url;
  //     });
  // }
  signUp(n, p, rp) {
    if (p === rp) {
      var obj = {
        name: n,
        password: p,
      };
      this.http
        .post("http://localhost:3000/api/admin", obj, {
          responseType: "text",
        })
        .subscribe((data) => {
          alert("welcom");
        });
    } else {
      alert("wrong password");
    }

    // localStorage.setItem("cv", JSON.stringify(obj));
    // this.router.navigateByUrl("/resume");

    console.log(obj);
  }
  signIn(password) {
    this.http
      .post(`http://localhost:3000/api/user/${password}`, {
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
