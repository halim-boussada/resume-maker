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
  imgUpload(img) {
    console.log("IMG FROM VER==> ", img.target.files[0]);
    var formData = new FormData();
    formData.append("img", img.target.files[0]);
    this.http
      .post("https://halim-resume.herokuapp.com//upload", formData)
      .subscribe((resp) => {
        this.imageUrl = resp["msg"].url;
      });
  }
  takedata(n, p, a) {
    var obj = {
      name: n,
      password: p,
      imageUrl: a,
    };
    this.http
      .post("https://halim-resume.herokuapp.com//api/admin", obj, {
        responseType: "text",
      })
      .subscribe((data) => {
        localStorage.setItem("resume", p);
        this.router.navigateByUrl("/resume");
      });
    console.log(obj);
  }
}
