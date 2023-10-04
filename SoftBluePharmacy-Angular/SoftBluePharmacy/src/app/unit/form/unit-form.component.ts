import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Unit } from 'src/app/models/unit';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-unit-form',
  templateUrl: './unit-form.component.html',
  styleUrls: ['./unit-form.component.css']
})
export class UnitFormComponent implements OnChanges{

  _entity: Unit | undefined;
  
    @Output()
    onSubmit = new EventEmitter<Unit>();
  
    @Input() set entity(value: Unit | undefined) {
      
      this._entity = value;
      if(this.entity)
        this.formGroup.reset(this.entity);
   
   }
   
   get entity(): Unit | undefined {
   
       return this._entity;
   
   }
  
    formGroup: FormGroup;
    constructor(private formBuilder: FormBuilder){
      this.formGroup = formBuilder.group({
        id: [0], 
        name: [null, [Validators.required]],
        localization: [null, [Validators.required]],
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
