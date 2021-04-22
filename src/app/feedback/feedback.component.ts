import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.css"],
})
export class FeedbackComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  id: any = localStorage.getItem("onefeedback");
  feedback: any;
  req: any = false;

  ngOnInit(): void {
    console.log(this.id);
    this.http
      .post(`${environment.URL}/api/Req/one/${this.id}`, {
        responseType: "json",
      })
      .subscribe((data) => {
        this.feedback = data;
        console.log("data", data);
      });
  }
  senReq() {
    var r = !this.req;
    this.req = r;
  }
  sendRequest(title, feedback) {
    var obj = {
      userId: this.feedback.userId,
      coachId: this.feedback.coachId,
      title: title,
      feedback: feedback,
    };
    console.log(obj);
    this.http
      .post(`${environment.URL}/api/feedback`, obj, {
        responseType: "json",
      })
      .subscribe((data) => {
        alert("sended");
        this.senReq();
      });
  }
}
