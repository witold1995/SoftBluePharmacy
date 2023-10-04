import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UnitMedicine } from 'src/app/models/unitMedicine';

@Component({
  selector: 'app-unit-medicine-list',
  templateUrl: './unit-medicine-list.component.html',
  styleUrls: ['./unit-medicine-list.component.css']
})
export class UnitMedicineListComponent {

  @Input()
  entities: UnitMedicine[] = [];

  @Output()
  onDelete = new EventEmitter<number>();

  @Output()
  onSelect = new EventEmitter<UnitMedicine>();

  delete(id: number | undefined){
    if (!id)
      return;

    this.onDelete.emit(id)
  }

  select(entity: UnitMedicine){
    this.onSelect.emit(entity);
  }}
