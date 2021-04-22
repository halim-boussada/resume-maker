import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManegeUsersComponent } from './manege-users.component';

describe('ManegeUsersComponent', () => {
  let component: ManegeUsersComponent;
  let fixture: ComponentFixture<ManegeUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManegeUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManegeUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
