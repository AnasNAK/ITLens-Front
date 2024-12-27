import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelItemNavigateComponent } from './panel-item-navigate.component';

describe('PanelItemNavigateComponent', () => {
  let component: PanelItemNavigateComponent;
  let fixture: ComponentFixture<PanelItemNavigateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelItemNavigateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelItemNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
