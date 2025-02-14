import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIndicatorComponent } from './user-indicator.component';

describe('UserIndicatorComponent', () => {
  let component: UserIndicatorComponent;
  let fixture: ComponentFixture<UserIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserIndicatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
