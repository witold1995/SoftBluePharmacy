import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitMedicineFormComponent } from './unit-medicine-form.component';

describe('UnitMedicineFormComponent', () => {
  let component: UnitMedicineFormComponent;
  let fixture: ComponentFixture<UnitMedicineFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitMedicineFormComponent]
    });
    fixture = TestBed.createComponent(UnitMedicineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
