import { Component, OnInit } from "@angular/core";
import { ServicesService } from "src/app/services/services.service";

@Component({
  selector: "app-summary-breakdown",
  templateUrl: "./summary-breakdown.component.html",
  styleUrls: ["./summary-breakdown.component.scss"],
})
export class SummaryBreakdownComponent implements OnInit {
  ingredintList: any[];
  show: boolean = false;
  totalNutrients: any;
  constructor(private services: ServicesService) {}

  ngOnInit() {
    this.getResponse();
  }
  getResponse() {
    this.services.getResonse.subscribe((res) => {
      console.log(res);
      this.ingredintList = res.ingredients;
      this.totalNutrients = res.totalNutrients;
    });
  }
}
