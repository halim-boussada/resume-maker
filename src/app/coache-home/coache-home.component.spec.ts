import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoacheHomeComponent } from './coache-home.component';

describe('CoacheHomeComponent', () => {
  let component: CoacheHomeComponent;
  let fixture: ComponentFixture<CoacheHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoacheHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoacheHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
