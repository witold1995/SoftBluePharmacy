import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitMedicineComponent } from './unit-medicine.component';

describe('UnitMedicineComponent', () => {
  let component: UnitMedicineComponent;
  let fixture: ComponentFixture<UnitMedicineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitMedicineComponent]
    });
    fixture = TestBed.createComponent(UnitMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
