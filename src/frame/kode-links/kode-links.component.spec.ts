import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KodeLinksComponent } from './kode-links.component';

describe('KodeLinksComponent', () => {
  let component: KodeLinksComponent;
  let fixture: ComponentFixture<KodeLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KodeLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KodeLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
