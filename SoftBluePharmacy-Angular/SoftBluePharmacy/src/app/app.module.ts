import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicineComponent } from './medicine/medicine.component';
import { MedicineListComponent } from './medicine/list/medicine-list.component';
import { MedicineFormComponent } from './medicine/form/medicine-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UnitComponent } from './unit/unit.component';
import { UnitFormComponent } from './unit/form/unit-form.component';
import { UnitListComponent } from './unit/list/unit-list.component';
import { UnitMedicineComponent } from './unitMedicine/unit-medicine.component';
import { UnitMedicineListComponent } from './unitMedicine/list/unit-medicine-list.component';
import { UnitMedicineFormComponent } from './unitMedicine/form/unit-medicine-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicineComponent,
    MedicineListComponent,
    MedicineFormComponent,
    UnitComponent,
    UnitFormComponent,
    UnitListComponent,
    UnitMedicineComponent,
    UnitMedicineListComponent,
    UnitMedicineFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatToolbarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
