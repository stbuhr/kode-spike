import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworkIconComponent } from './social-network-icon.component';

describe('SocialNetworkIconComponent', () => {
  let component: SocialNetworkIconComponent;
  let fixture: ComponentFixture<SocialNetworkIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialNetworkIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialNetworkIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
