import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoglocationComponent } from './dialoglocation.component';

describe('DialoglocationComponent', () => {
  let component: DialoglocationComponent;
  let fixture: ComponentFixture<DialoglocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialoglocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialoglocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
