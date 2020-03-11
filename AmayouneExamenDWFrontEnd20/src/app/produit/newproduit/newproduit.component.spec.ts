import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewproduitComponent } from './newproduit.component';

describe('NewproduitComponent', () => {
  let component: NewproduitComponent;
  let fixture: ComponentFixture<NewproduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewproduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
