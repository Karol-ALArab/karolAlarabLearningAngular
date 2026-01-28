import {Component, Input, } from '@angular/core';
import {Items} from '../shared-models/items';

@Component({
  selector: 'app-equipment-list-item',
  imports: [],
  templateUrl: './equipment-list-item.html',
  styleUrl: './equipment-list-item.css',
})
export class EquipmentListItem {
  @Input() item?: Items;
}
