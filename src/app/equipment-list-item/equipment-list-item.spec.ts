import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentListItem } from './equipment-list-item';

describe('EquipmentListItem', () => {
  let component: EquipmentListItem;
  let fixture: ComponentFixture<EquipmentListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
