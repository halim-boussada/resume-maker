import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-manege-coaches",
  templateUrl: "./manege-coaches.component.html",
  styleUrls: ["./manege-coaches.component.css"],
})
export class ManegeCoachesComponent implements OnInit {
  constructor(private http: HttpClient) {}
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
  banOneCoach(id) {
    this.http
      .delete(`${environment.URL}/api/deleteCoach/${id}`, {
        responseType: "json",
      })
      .subscribe((data) => {
        alert("banned");
        this.ngOnInit();
      });
  }
}
