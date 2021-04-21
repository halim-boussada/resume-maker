import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCoacheComponent } from './one-coache.component';

describe('OneCoacheComponent', () => {
  let component: OneCoacheComponent;
  let fixture: ComponentFixture<OneCoacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneCoacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneCoacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
