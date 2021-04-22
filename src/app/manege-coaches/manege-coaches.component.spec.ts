import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManegeCoachesComponent } from './manege-coaches.component';

describe('ManegeCoachesComponent', () => {
  let component: ManegeCoachesComponent;
  let fixture: ComponentFixture<ManegeCoachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManegeCoachesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManegeCoachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
