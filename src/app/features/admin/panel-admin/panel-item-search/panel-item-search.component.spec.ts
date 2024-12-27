import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelItemSearchComponent } from './panel-item-search.component';

describe('PanelItemSearchComponent', () => {
  let component: PanelItemSearchComponent;
  let fixture: ComponentFixture<PanelItemSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelItemSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelItemSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
