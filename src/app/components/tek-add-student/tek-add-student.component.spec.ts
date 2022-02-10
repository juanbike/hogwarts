import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekAddStudentComponent } from './tek-add-student.component';

describe('TekAddStudentComponent', () => {
  let component: TekAddStudentComponent;
  let fixture: ComponentFixture<TekAddStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TekAddStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TekAddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
