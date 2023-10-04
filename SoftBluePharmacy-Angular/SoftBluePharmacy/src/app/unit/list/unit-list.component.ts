import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Unit } from 'src/app/models/unit';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})
export class UnitListComponent {

  @Input()
  entities: Unit[] = [];

  @Output()
  onDelete = new EventEmitter<number>();

  @Output()
  onSelect = new EventEmitter<Unit>();

  delete(id: number | undefined){
    if (!id)
      return;

    this.onDelete.emit(id)
  }

  select(entity: Unit){
    this.onSelect.emit(entity);
  }
}
