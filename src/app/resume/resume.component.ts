import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.css"],
})
export class ResumeComponent implements OnInit {
  constructor(private http: HttpClient) {}
  data: any;
  resume: any = localStorage.getItem("resume");
  ngOnInit(): void {
    // this.http
    //   .get(`https://halim-resume.herokuapp.com/api/admin/${this.resume}`, {
    //     responseType: "json",
    //   })
    //   .subscribe((data) => {
    //     console.log("dadadadada", data);
    //     this.data = data;
    //   });
    this.data = JSON.parse(localStorage.getItem("cv"));
  }
}
