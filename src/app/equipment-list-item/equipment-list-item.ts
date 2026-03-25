import {Component, Input, } from '@angular/core';
import {Items} from '../shared-models/items';
import {CurrencyPipe, DatePipe, NgIf, NgOptimizedImage, UpperCasePipe} from '@angular/common';
import {EquipmentLabel} from '../pipes/equipment-label';

@Component({
  selector: 'app-equipment-list-item',
  standalone: true,
  imports: [NgIf, UpperCasePipe, CurrencyPipe, DatePipe, EquipmentLabel],
  templateUrl: './equipment-list-item.html',
  styleUrl: './equipment-list-item.css',
})
export class EquipmentListItem {
  @Input() item?: Items;
}
