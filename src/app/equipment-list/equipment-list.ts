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
  items: Items[] = [];



}



