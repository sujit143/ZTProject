import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcharticleComponent } from './searcharticle.component';

describe('SearcharticleComponent', () => {
  let component: SearcharticleComponent;
  let fixture: ComponentFixture<SearcharticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearcharticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcharticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
