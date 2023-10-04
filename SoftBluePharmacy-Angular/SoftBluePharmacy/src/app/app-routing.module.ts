import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicineComponent } from './medicine/medicine.component';
import { UnitComponent } from './unit/unit.component';
import { UnitMedicineComponent } from './unitMedicine/unit-medicine.component';

const routes: Routes =
  [
    {path: "medicine", component: MedicineComponent, pathMatch: "full"},
    {path: "unit", component: UnitComponent, pathMatch: "full"},
    {path: "unit-medicine", component: UnitMedicineComponent, pathMatch: "full"},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
