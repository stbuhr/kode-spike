import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCheckboxComponent } from './icon-checkbox.component';

describe('IconCheckboxComponent', () => {
  let component: IconCheckboxComponent;
  let fixture: ComponentFixture<IconCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
