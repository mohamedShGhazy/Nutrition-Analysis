import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IngredientsComponent } from "./components/ingredients/ingredients.component";
import { SummaryBreakdownComponent } from "./components/summary-breakdown/summary-breakdown.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "Analys-Nutrition",
    pathMatch: "full",
  },
  {
    path: "Analys-Nutrition",
    component: IngredientsComponent,
  },
  {
    path: "Summary-Breakdown",
    component: SummaryBreakdownComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
