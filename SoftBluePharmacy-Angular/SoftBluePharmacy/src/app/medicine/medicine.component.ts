import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../services/baseService';
import { Medicine } from '../models/medicine';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit{
  selectedEntity: Medicine | undefined;
  entities: Medicine[] = [];

 constructor (private service: MedicineService){}
  ngOnInit(): void {
    this.getEntities();
    this.clear();
  }
  getEntities(): void {
    this.service.getAll().subscribe(x => this.entities = x);
  }

  clear(){
    this.selectedEntity = {id:0, manufacturer: "", name:"", otc:false};
  }

  select(entity: Medicine){
    this.selectedEntity = entity}

  onDelete(id: number){
    this.entities = this.entities.filter(x => x.id !== id);
    this.service.delete(id).subscribe(x => this.getEntities());
  }

  onSubmit(medicine: Medicine){
    if(!medicine)
    return;
    if(medicine.id)
      this.service.put(medicine).subscribe(x => this.getEntities());
    else
      this.service.post(medicine).subscribe(x => this.getEntities());
  }

}

