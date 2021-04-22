import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-check-user-profile",
  templateUrl: "./check-user-profile.component.html",
  styleUrls: ["./check-user-profile.component.css"],
})
export class CheckUserProfileComponent implements OnInit {
  constructor(private http: HttpClient) {}
  user: any;
  soft: any;
  tech: any;
  experience: any;
  education: any;
  addsoft: any = false;
  addtech: any = false;
  addexperience: any = false;
  addeducation: any = false;
  id: any = localStorage.getItem("checkUser");
  ngOnInit(): void {
    this.http
      .post(`${environment.URL}/api/soft/${this.id}`, {
        responseType: "json",
      })
      .subscribe((data) => {
        this.soft = data;
      });
    this.http
      .post(`${environment.URL}/api/tech/${this.id}`, {
        responseType: "json",
      })
      .subscribe((data) => {
        this.tech = data;
      });
  }

  /////////// SOFT SKILLS //////////////////
  addSoft() {
    this.addsoft = true;
  }
  cancelSoft() {
    this.addsoft = false;
  }
  saveSoft(skill) {
    var obj = {
      userId: this.id,
      skill: skill,
    };
    this.http
      .post(`${environment.URL}/api/soft`, obj, {
        responseType: "json",
      })
      .subscribe((data) => {
        this.ngOnInit();
        this.cancelSoft();
      });
  }
  ////////////// END SOFT //////////

  /////////// SOFT tech //////////////////
  addTech() {
    this.addtech = true;
  }
  canceltech() {
    this.addtech = false;
  }
  savetech(skill) {
    var obj = {
      userId: this.id,
      skill: skill,
    };
    console.log(obj);
    this.http
      .post(`${environment.URL}/api/tech`, obj, {
        responseType: "json",
      })
      .subscribe((data) => {
        this.ngOnInit();
        this.canceltech();
      });
  }
  ////////////// END tech //////////
  captureScreen() {
    const data = document.getElementById("contentToConvert");
    html2canvas(data).then((canvas) => {
      // Few necessary setting options
      const imgWidth = 200;
      const pageHeight = 500;
      const imgHeight = (canvas.height * 300) / canvas.width;
      const heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4"); // A4 size page of PDF
      const position = 0;
      pdf.addImage(contentDataURL, "PNG", 25, position, imgWidth, imgHeight);
      pdf.save("testPdf.pdf"); // Generated PDF
    });
  }
}
