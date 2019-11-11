import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreactiveComponent } from './editreactive.component';

describe('EditreactiveComponent', () => {
  let component: EditreactiveComponent;
  let fixture: ComponentFixture<EditreactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditreactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
