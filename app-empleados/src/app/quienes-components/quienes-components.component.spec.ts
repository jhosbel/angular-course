import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesComponentsComponent } from './quienes-components.component';

describe('QuienesComponentsComponent', () => {
  let component: QuienesComponentsComponent;
  let fixture: ComponentFixture<QuienesComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuienesComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuienesComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
