import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosComponentsComponent } from './proyectos-components.component';

describe('ProyectosComponentsComponent', () => {
  let component: ProyectosComponentsComponent;
  let fixture: ComponentFixture<ProyectosComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
