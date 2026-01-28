import { Component } from '@angular/core';
import {Items} from '../shared-models/items';
import {EquipmentListItem} from '../equipment-list-item/equipment-list-item';
import {NgFor} from '@angular/common';


@Component({
  selector: 'app-equipment-list',
  imports: [
    EquipmentListItem,
  NgFor
  ],
  templateUrl: './equipment-list.html',
  styleUrl: './equipment-list.css',
})
export class EquipmentList {
  items: Items[] = [
    { id: 1, name: 'Soccer Ball', price: 30, description: 'Official size 5 match ball', category: 'Equipment' },
    { id: 2, name: 'Soccer Cleats', price: 120, description: 'Clean Light weight cleats', category: 'Footwear' },
    { id: 3, name: 'Goalkeeper Gloves', price: 60, description: 'Enhanced gloves for goalies', category: 'Gear' },
    { id: 4, name: 'Team Jersey', price: 90, description: 'Official Real Madrid home jersey', category: 'Apparel' },
    { id: 5, name: 'Shin Guards', price: 25, description: 'Lightweight shin guards', category: 'Protection' },
    { id: 6, name: 'Training Cones', price: 20, description: 'Set of 12 training cones', category: 'Training' }
  ];
}



