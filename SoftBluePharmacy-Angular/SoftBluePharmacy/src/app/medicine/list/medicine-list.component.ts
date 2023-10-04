import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Medicine } from 'src/app/models/medicine';


@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent {

  @Input()
  entities: Medicine[] = [];

  @Output()
  onDelete = new EventEmitter<number>();

  @Output()
  onSelect = new EventEmitter<Medicine>();

  delete(id: number | undefined){
    if (!id)
      return;

    this.onDelete.emit(id)
  }

  select(entity: Medicine){
    this.onSelect.emit(entity);
  }
}
