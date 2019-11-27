import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerComponent } from './tercer.component';

describe('TercerComponent', () => {
  let component: TercerComponent;
  let fixture: ComponentFixture<TercerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TercerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TercerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
