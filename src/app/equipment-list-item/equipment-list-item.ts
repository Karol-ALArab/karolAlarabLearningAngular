import {Component, Input, } from '@angular/core';
import {Items} from '../shared-models/items';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-equipment-list-item',
  imports: [NgIf],
  templateUrl: './equipment-list-item.html',
  styleUrl: './equipment-list-item.css',
})
export class EquipmentListItem {
  @Input() item?: Items;
}
