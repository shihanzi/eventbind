import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcustomerComponent } from './dialogcustomer.component';

describe('DialogcustomerComponent', () => {
  let component: DialogcustomerComponent;
  let fixture: ComponentFixture<DialogcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
