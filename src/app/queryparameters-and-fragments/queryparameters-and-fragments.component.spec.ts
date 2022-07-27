import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryparametersAndFragmentsComponent } from './queryparameters-and-fragments.component';

describe('QueryparametersAndFragmentsComponent', () => {
  let component: QueryparametersAndFragmentsComponent;
  let fixture: ComponentFixture<QueryparametersAndFragmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryparametersAndFragmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryparametersAndFragmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
