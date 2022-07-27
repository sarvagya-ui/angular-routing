import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteParamReactiveComponent } from './route-param-reactive.component';

describe('RouteParamReactiveComponent', () => {
  let component: RouteParamReactiveComponent;
  let fixture: ComponentFixture<RouteParamReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteParamReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteParamReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
