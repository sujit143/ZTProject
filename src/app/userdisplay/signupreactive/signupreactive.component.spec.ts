import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupreactiveComponent } from './signupreactive.component';

describe('SignupreactiveComponent', () => {
  let component: SignupreactiveComponent;
  let fixture: ComponentFixture<SignupreactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupreactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
