import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioApiComponent } from './usuario-api.component';

describe('UsuarioApiComponent', () => {
  let component: UsuarioApiComponent;
  let fixture: ComponentFixture<UsuarioApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioApiComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
