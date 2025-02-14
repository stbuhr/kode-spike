import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KodeAddressComponent } from './kode-address.component';

describe('KodeAddressComponent', () => {
  let component: KodeAddressComponent;
  let fixture: ComponentFixture<KodeAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KodeAddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KodeAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
