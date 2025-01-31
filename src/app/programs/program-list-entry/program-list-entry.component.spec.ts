import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramListEntryComponent } from './program-list-entry.component';

describe('ProgramListEntryComponent', () => {
  let component: ProgramListEntryComponent;
  let fixture: ComponentFixture<ProgramListEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramListEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
