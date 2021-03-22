import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
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
