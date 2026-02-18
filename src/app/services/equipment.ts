import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Items } from '../shared-models/items';
import { MOCK_EQUIPMENT } from '../data/mock-equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private equipment: Items[] = MOCK_EQUIPMENT;

  constructor() {}

  // READ ALL
  getEquipment(): Observable<Items[]> {
    return of(this.equipment);
  }

  // READ ONE
  getEquipmentById(equipmentId: number): Observable<Items | undefined> {
    const item = this.equipment.find(equip => equip.id === equipmentId);
    return of(item);
  }

  // CREATE
  addEquipment(newEquipment: Items): Observable<Items[]> {
    this.equipment.push(newEquipment);
    return of(this.equipment);
  }

  // UPDATE
  updateEquipment(updatedEquipment: Items): Observable<Items[]> {
    const index = this.equipment.findIndex(equip => equip.id === updatedEquipment.id);
    if (index !== -1) {
      this.equipment[index] = updatedEquipment;
    }
    return of(this.equipment);
  }


  deleteEquipment(equipmentId: number): void {
    const index = this.equipment.findIndex(equip => equip.id === equipmentId);

    if (index !== -1) {
      this.equipment.splice(index, 1);
      console.log('Equipment Deleted!');
    } else {
      console.error('Equipment not found for deletion.');
    }
  }


  generateNewId(): number {
    return this.equipment.length > 0
      ? Math.max(...this.equipment.map(item => item.id)) + 1
      : 1;
  }
}
