import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewutilisateurComponent } from './newutilisateur.component';

describe('NewutilisateurComponent', () => {
  let component: NewutilisateurComponent;
  let fixture: ComponentFixture<NewutilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewutilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
