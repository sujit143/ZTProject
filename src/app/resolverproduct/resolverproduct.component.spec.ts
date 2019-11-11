import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolverproductComponent } from './resolverproduct.component';

describe('ResolverproductComponent', () => {
  let component: ResolverproductComponent;
  let fixture: ComponentFixture<ResolverproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolverproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolverproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
