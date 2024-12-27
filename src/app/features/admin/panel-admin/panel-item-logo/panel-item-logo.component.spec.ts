import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelItemLogoComponent } from './panel-item-logo.component';

describe('PanelItemLogoComponent', () => {
  let component: PanelItemLogoComponent;
  let fixture: ComponentFixture<PanelItemLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelItemLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelItemLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
