import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneMlComponent } from './one-ml.component';

describe('OneMlComponent', () => {
  let component: OneMlComponent;
  let fixture: ComponentFixture<OneMlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneMlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneMlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
