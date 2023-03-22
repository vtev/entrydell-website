import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsModuleComponent } from './buttons-module.component';

describe('ButtonsModuleComponent', () => {
  let component: ButtonsModuleComponent;
  let fixture: ComponentFixture<ButtonsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
