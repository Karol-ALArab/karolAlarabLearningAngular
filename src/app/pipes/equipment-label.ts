import { Pipe, PipeTransform } from '@angular/core';
import {Items} from '../shared-models/items';

@Pipe({
  name: 'equipmentLabel',
})
export class EquipmentLabel implements PipeTransform {
  transform(item: Items | undefined): string {
    if (!item) return '';

    const category = item.category ? item.category : 'Uncategorized';
    return `${item.name} (${category})`;
  }
}
