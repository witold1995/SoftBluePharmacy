import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitMedicineListComponent } from './unit-medicine-list.component';

describe('UnitMedicineListComponent', () => {
  let component: UnitMedicineListComponent;
  let fixture: ComponentFixture<UnitMedicineListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitMedicineListComponent]
    });
    fixture = TestBed.createComponent(UnitMedicineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
