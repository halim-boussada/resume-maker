import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-download-resume",
  templateUrl: "./download-resume.component.html",
  styleUrls: ["./download-resume.component.css"],
})
export class DownloadResumeComponent implements OnInit {
  constructor(private http: HttpClient) {}
  user: any;
  soft: any;
  tech: any;
  experience: any;
  education: any;
  language: any;
  addsoft: any = false;
  addtech: any = false;
  addlanguage: any = false;
  addexperience: any = false;
  addeducation: any = false;
  delete: any = false;
  id: any = localStorage.getItem("id");
  ngOnInit(): void {
    this.http
      .post(`${environment.URL}/api/getuser/${this.id}`, {
        responseType: "json",
      })
      .subscribe((data) => {
        this.user = data;
      });
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
    this.http
      .post(`${environment.URL}/api/language/${this.id}`, {
        responseType: "json",
      })
      .subscribe((data) => {
        this.language = data;
      });
    this.http
      .post(`${environment.URL}/api/experience/${this.id}`, {
        responseType: "json",
      })
      .subscribe((data) => {
        this.experience = data;
        console.log(this.experience);
      });
    this.http
      .post(`${environment.URL}/api/education/${this.id}`, {
        responseType: "json",
      })
      .subscribe((data) => {
        this.education = data;
      });
  }
  active() {
    this.delete = true;
  }
  /////////// SOFT experience //////////////////
  addexp() {
    this.addexperience = true;
  }
  cancelexp() {
    this.addexperience = false;
  }
  saveexp(startDate, endDate, company, post, discription) {
    var obj = {
      userId: this.id,
      startDate,
      endDate,
      company,
      post,
      discription,
    };
    this.http
      .post(`${environment.URL}/api/ex`, obj, {
        responseType: "json",
      })
      .subscribe((data) => {
        this.ngOnInit();
        this.addexp();
      });
  }
  ////////////// END experice //////////

  /////////// SOFT education //////////////////
  addEducation() {
    this.addeducation = true;
  }
  canceleducation() {
    this.addeducation = false;
  }
  saveeducation(startDate, endDate, university, diploma, discription) {
    var obj = {
      userId: this.id,
      startDate,
      endDate,
      university,
      diploma,
      discription,
    };
    this.http
      .post(`${environment.URL}/api/education`, obj, {
        responseType: "json",
      })
      .subscribe((data) => {
        this.ngOnInit();
        this.canceleducation();
      });
  }
  ////////////// END experice //////////

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
  ///////////////// DELETE DATA ////////////////
  deletesoft(id) {
    this.http
      .delete(`${environment.URL}/api/soft/${id}`, {
        responseType: "json",
      })
      .subscribe((data) => {
        alert("deleted");
        this.ngOnInit();
      });
  }
  deleteexperience(id) {
    this.http
      .delete(`${environment.URL}/api/experience/${id}`, {
        responseType: "json",
      })
      .subscribe((data) => {
        alert("deleted");
        this.ngOnInit();
      });
  }
  deleteeducation(id) {
    this.http
      .delete(`${environment.URL}/api/education/${id}`, {
        responseType: "json",
      })
      .subscribe((data) => {
        alert("deleted");
        this.ngOnInit();
      });
  }
  deletelanguage(id) {
    this.http
      .delete(`${environment.URL}/api/language/${id}`, {
        responseType: "json",
      })
      .subscribe((data) => {
        alert("deleted");
        this.ngOnInit();
      });
  }
  deletetech(id) {
    this.http
      .delete(`${environment.URL}/api/tech/${id}`, {
        responseType: "json",
      })
      .subscribe((data) => {
        alert("deleted");
        this.ngOnInit();
      });
  }
  ////////////// END DELETE ///////////////////

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
  /// UPDATE DATA ///////
  updateexperience(id, startDate, endDate, company, post, discription) {
    var obj = {
      startDate,
      endDate,
      company,
      post,
      discription,
    };
    console.log(obj);
    this.http
      .put(`${environment.URL}/api/experience/${id}`, obj, {
        responseType: "json",
      })
      .subscribe((data) => {
        this.ngOnInit();
      });
  }

  updateeducation(id, startDate, endDate, university, diploma, discription) {
    var obj = {
      startDate,
      endDate,
      university,
      diploma,
      discription,
    };
    this.http
      .put(`${environment.URL}/api/education/${id}`, obj, {
        responseType: "json",
      })
      .subscribe((data) => {
        this.ngOnInit();
      });
  }

  updatesoft(id, skill) {
    var obj = {
      skill,
    };
    this.http
      .put(`${environment.URL}/api/soft/${id}`, obj, {
        responseType: "json",
      })
      .subscribe((data) => {
        this.ngOnInit();
      });
  }
  utech(formId, display) {
    document.getElementById(formId).style.display = display;
  }

  updatetech(id, skill) {
    var obj = {
      skill,
    };
    this.http
      .put(`${environment.URL}/api/tech/${id}`, obj, {
        responseType: "json",
      })
      .subscribe((data) => {
        this.ngOnInit();
      });
  }
  updatelanguage(id, language) {
    var obj = {
      language,
    };
    this.http
      .put(`${environment.URL}/api/language/${id}`, obj, {
        responseType: "json",
      })
      .subscribe((data) => {
        this.ngOnInit();
      });
  }
  ///// END UPDATE /////////
  /////////// SOFT language //////////////////
  addLanguage() {
    this.addlanguage = true;
  }
  cancellanguage() {
    this.addlanguage = false;
  }
  savelanguage(skill) {
    var obj = {
      userId: this.id,
      language: skill,
    };
    console.log(obj);
    this.http
      .post(`${environment.URL}/api/language`, obj, {
        responseType: "json",
      })
      .subscribe((data) => {
        this.ngOnInit();
        this.cancellanguage();
      });
  }
  ////////////// END language //////////
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
