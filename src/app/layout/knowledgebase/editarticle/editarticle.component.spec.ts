import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarticleComponent } from './editarticle.component';

describe('EditarticleComponent', () => {
  let component: EditarticleComponent;
  let fixture: ComponentFixture<EditarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
