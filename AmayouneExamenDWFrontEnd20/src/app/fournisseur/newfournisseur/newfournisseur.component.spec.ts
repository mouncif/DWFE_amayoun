import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfournisseurComponent } from './newfournisseur.component';

describe('NewfournisseurComponent', () => {
  let component: NewfournisseurComponent;
  let fixture: ComponentFixture<NewfournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewfournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewfournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
