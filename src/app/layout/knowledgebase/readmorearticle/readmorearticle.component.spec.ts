import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmorearticleComponent } from './readmorearticle.component';

describe('ReadmorearticleComponent', () => {
  let component: ReadmorearticleComponent;
  let fixture: ComponentFixture<ReadmorearticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadmorearticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadmorearticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
