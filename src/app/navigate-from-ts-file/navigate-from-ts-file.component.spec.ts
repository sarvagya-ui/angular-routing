import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateFromTsFileComponent } from './navigate-from-ts-file.component';

describe('NavigateFromTsFileComponent', () => {
  let component: NavigateFromTsFileComponent;
  let fixture: ComponentFixture<NavigateFromTsFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigateFromTsFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateFromTsFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
