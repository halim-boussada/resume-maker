import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-one-ml",
  templateUrl: "./one-ml.component.html",
  styleUrls: ["./one-ml.component.css"],
})
export class OneMlComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ml: any;
  up: any = false;
  ngOnInit(): void {
    var one = localStorage.getItem("oneMl");
    this.http
      .post(`${environment.URL}/api/oneMotivation/${one}`, {
        responseType: "json",
      })
      .subscribe((data) => {
        console.log(data);
        this.ml = data;
      });
  }

  open() {
    var r = !this.up;
    this.up = r;
  }
  update(header, body) {
    var obj = {
      header: header,
      body: body,
    };
    this.http
      .put(`${environment.URL}/api/motivation/${this.ml._id}`, obj, {
        responseType: "json",
      })
      .subscribe((data) => {
        alert("updated");
        this.ngOnInit();
        this.open();
      });
  }
}
