import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuatroComponent } from './cuatro.component';

describe('CuatroComponent', () => {
  let component: CuatroComponent;
  let fixture: ComponentFixture<CuatroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuatroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
