import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteParamSnapshotComponent } from './route-param-snapshot.component';

describe('RouteParamSnapshotComponent', () => {
  let component: RouteParamSnapshotComponent;
  let fixture: ComponentFixture<RouteParamSnapshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteParamSnapshotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteParamSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
