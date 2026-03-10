import {Component, Input, } from '@angular/core';
import {Items} from '../shared-models/items';
import {NgIf,NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-equipment-list-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './equipment-list-item.html',
  styleUrl: './equipment-list-item.css',
})
export class EquipmentListItem {
  @Input() item?: Items;
}
