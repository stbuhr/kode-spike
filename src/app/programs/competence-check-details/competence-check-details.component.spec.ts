import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceCheckDetailsComponent } from './competence-check-details.component';

describe('CompetenceCheckDetailsComponent', () => {
  let component: CompetenceCheckDetailsComponent;
  let fixture: ComponentFixture<CompetenceCheckDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetenceCheckDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetenceCheckDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
