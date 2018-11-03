import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabResultEntryComponent } from './lab-result-entry.component';

describe('LabResultEntryComponent', () => {
  let component: LabResultEntryComponent;
  let fixture: ComponentFixture<LabResultEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabResultEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabResultEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
