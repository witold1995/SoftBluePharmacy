import { Component, OnInit } from '@angular/core';
import { UnitMedicine } from '../models/unitMedicine';
import { MedicineService, UnitMedicineService, UnitService } from '../services/baseService';
import { Medicine } from '../models/medicine';
import { Unit } from '../models/unit';

@Component({
  selector: 'app-unit-medicine',
  templateUrl: './unit-medicine.component.html',
  styleUrls: ['./unit-medicine.component.css']
})
export class UnitMedicineComponent implements OnInit{
  selectedEntity: UnitMedicine | undefined;
  entities: UnitMedicine[] = [];
  medicines: Medicine[] = [];
  units: Unit[] = [];

  constructor (
    private service: UnitMedicineService,
    private medService: MedicineService,
    private unitService: UnitService,
    ){}
  ngOnInit(): void {
    this.getEntities();
    this.getMedicines();
    this.getUnits();
    this.clear();
  }

  getMedicines(): void {
    this.medService.getAll().subscribe(x => this.medicines = x);
  }
  getUnits(): void {
    this.unitService.getAll().subscribe(x => this.units = x);
  }

  getEntities(): void {
    this.service.getAll().subscribe(x => this.entities = x);
  }

  clear(){
    this.selectedEntity = {id:0,  medicineId: -1, unitId: -1, amountAvailable: 0};
  }

  select(entity: UnitMedicine){
    this.selectedEntity = entity}

  onDelete(id: number){
    this.entities = this.entities.filter(x => x.id !== id);
    this.service.delete(id).subscribe(x => this.getEntities());
  }

  onSubmit(um: UnitMedicine){
    if(!um)
    return;
    if(um.id)
      this.service.put(um).subscribe(x => this.getEntities());
    else
      this.service.post(um).subscribe(x => this.getEntities());
  }
}
