import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestArchieveComponent } from './request-archieve.component';

describe('RequestArchieveComponent', () => {
  let component: RequestArchieveComponent;
  let fixture: ComponentFixture<RequestArchieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestArchieveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestArchieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
