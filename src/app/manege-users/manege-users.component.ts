import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-manege-users",
  templateUrl: "./manege-users.component.html",
  styleUrls: ["./manege-users.component.css"],
})
export class ManegeUsersComponent implements OnInit {
  constructor(private http: HttpClient) {}
  user: any;
  ngOnInit(): void {
    this.http
      .post(`${environment.URL}/api/getAllUsers`, {
        responseType: "json",
      })
      .subscribe((data) => {
        console.log(data);
        this.user = data;
      });
  }
  banOneUser(id) {
    this.http
      .delete(`${environment.URL}/api/deleteUser/${id}`, {
        responseType: "json",
      })
      .subscribe((data) => {
        alert("banned");
        this.ngOnInit();
      });
  }
}
