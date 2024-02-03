import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpassresetComponent } from './userpassreset.component';

describe('UserpassresetComponent', () => {
  let component: UserpassresetComponent;
  let fixture: ComponentFixture<UserpassresetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpassresetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserpassresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
