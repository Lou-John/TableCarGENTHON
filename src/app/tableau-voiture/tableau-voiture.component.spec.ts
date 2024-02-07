import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauVoitureComponent } from './tableau-voiture.component';

describe('TableauVoitureComponent', () => {
  let component: TableauVoitureComponent;
  let fixture: ComponentFixture<TableauVoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauVoitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
