import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaComponentsComponent } from './llista-components.component';

describe('LlistaComponentsComponent', () => {
  let component: LlistaComponentsComponent;
  let fixture: ComponentFixture<LlistaComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistaComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlistaComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
