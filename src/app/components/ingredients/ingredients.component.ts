import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { API } from "src/app/services/API";
import { ServicesService } from "src/app/services/services.service";

@Component({
  selector: "app-ingredients",
  templateUrl: "./ingredients.component.html",
  styleUrls: ["./ingredients.component.scss"],
})
export class IngredientsComponent implements OnInit {
  ingredients = new FormControl();
  constructor(private servce: ServicesService, private router: Router) {}

  ngOnInit() {}

  submit() {
    let lines = this.ingredients.value.split("\n");
    let ingr = [];
    lines.map((res) => {
      ingr.push(res);
    });
    let body = {
      title: "ingredint",
      ingr: ingr,
    };
    this.servce.postMethod(API().nutrition_detailss, body).subscribe((res) => {
      this.servce.responseData(res);
      this.router.navigate(["Summary-Breakdown"]);
    });
  }
}
