import { Component, OnInit } from '@angular/core';
import { Unit } from '../models/unit';
import { UnitService } from '../services/baseService';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit{
  selectedEntity: Unit | undefined;
  entities: Unit[] = [];

 constructor (private service: UnitService){}
  ngOnInit(): void {
    this.getEntities();
    this.clear();
  }
  getEntities(): void {
    this.service.getAll().subscribe(x => this.entities = x);
  }

  clear(){
    this.selectedEntity = {id:0, name:"", localization: "",};
  }

  select(entity: Unit){
    this.selectedEntity = entity}

  onDelete(id: number){
    this.entities = this.entities.filter(x => x.id !== id);
    this.service.delete(id).subscribe(x => this.getEntities());
  }

  onSubmit(unit: Unit){
    if(!unit)
    return;
    if(unit.id)
      this.service.put(unit).subscribe(x => this.getEntities());
    else
      this.service.post(unit).subscribe(x => this.getEntities());
  }
}
