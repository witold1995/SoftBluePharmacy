import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Medicine } from 'src/app/models/medicine';
import { Unit } from 'src/app/models/unit';
import { UnitMedicine } from 'src/app/models/unitMedicine';
import { UnitComponent } from 'src/app/unit/unit.component';
import { UnitMedicineComponent } from '../unit-medicine.component';

@Component({
  selector: 'app-unit-medicine-form',
  templateUrl: './unit-medicine-form.component.html',
  styleUrls: ['./unit-medicine-form.component.css']
})
export class UnitMedicineFormComponent implements OnChanges{

  @Input()
  medicines: Medicine[] = [];

  @Input()
  units: Unit[] = [];

 

  _entity: UnitMedicine | undefined;
  
    @Output()
    onSubmit = new EventEmitter<UnitMedicine>();
  
    @Input() set entity(value: UnitMedicine | undefined) {
      
      this._entity = value;
      if(this.entity)
        this.formGroup.reset(this.entity);
   
   }
   
   get entity(): UnitMedicine | undefined {
   
       return this._entity;
   
   }
  
    formGroup: FormGroup;
    constructor(private formBuilder: FormBuilder){
      this.formGroup = formBuilder.group({
        id: [0], 
        medicineId: [null, [Validators.required]],
        unitId: [null, [Validators.required]],
        amountAvailable: [null, [Validators.required]],
      });
      this.formGroup.value
    }
    ngOnChanges(changes: SimpleChanges): void {
      if(this.entity)
        this.formGroup.reset(this.entity);
    }
  
    submit(x: any) {
      this.onSubmit.emit(this.formGroup.value);
    }
  }
