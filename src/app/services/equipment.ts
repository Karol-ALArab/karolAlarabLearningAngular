import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Items } from '../shared-models/items';
import { MOCK_EQUIPMENT } from '../data/mock-equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private equipment: Items[] = MOCK_EQUIPMENT;

  constructor() { }


  getEquipment(): Observable<Items[]> {
    return of(this.equipment);
  }

  // READ
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

  // DELETE
  deleteEquipment(equipmentId: number): Observable<Items> {
    const index = this.equipment.findIndex(equip => equip.id === equipmentId);
    const deletedItem = this.equipment[index];
    this.equipment = this.equipment.filter(equip => equip.id !== equipmentId);
    return of(deletedItem);
  }
}


