import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Medicine } from 'src/app/models/medicine';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-medicine-form',
  templateUrl: './medicine-form.component.html',
  styleUrls: ['./medicine-form.component.css']
})
export class MedicineFormComponent implements OnChanges{

_entity: Medicine | undefined;

  @Output()
  onSubmit = new EventEmitter<Medicine>();

  @Input() set entity(value: Medicine | undefined) {
    
    this._entity = value;
    if(this.entity)
      this.formGroup.reset(this.entity);
 
 }
 
 get entity(): Medicine | undefined {
 
     return this._entity;
 
 }

  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder){
    this.formGroup = formBuilder.group({
      id: [0], 
      manufacturer: [null, [Validators.required]],
      name: [null, [Validators.required]],
      otc: [null, [Validators.required]],
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
