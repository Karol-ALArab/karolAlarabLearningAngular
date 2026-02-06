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
}
