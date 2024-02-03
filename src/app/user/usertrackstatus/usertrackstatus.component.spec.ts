import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertrackstatusComponent } from './usertrackstatus.component';

describe('UsertrackstatusComponent', () => {
  let component: UsertrackstatusComponent;
  let fixture: ComponentFixture<UsertrackstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsertrackstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsertrackstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
