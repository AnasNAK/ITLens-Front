import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerPanelsComponent } from './trigger-panels.component';

describe('TriggerPanelsComponent', () => {
  let component: TriggerPanelsComponent;
  let fixture: ComponentFixture<TriggerPanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriggerPanelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriggerPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
