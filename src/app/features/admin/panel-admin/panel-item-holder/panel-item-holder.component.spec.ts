import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelItemHolderComponent } from './panel-item-holder.component';

describe('PanelItemHolderComponent', () => {
  let component: PanelItemHolderComponent;
  let fixture: ComponentFixture<PanelItemHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelItemHolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelItemHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
