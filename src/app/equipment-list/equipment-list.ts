import {Component, OnInit} from '@angular/core';
import {Items} from '../shared-models/items';
import {EquipmentListItem} from '../equipment-list-item/equipment-list-item';
import {NgFor} from '@angular/common';
import {EquipmentService} from '../services/equipment';


@Component({
  selector: 'app-equipment-list',
  imports: [
    EquipmentListItem,
  NgFor
  ],
  templateUrl: './equipment-list.html',
  styleUrl: './equipment-list.css',
})
export class EquipmentList implements OnInit {
  items: Items[] = [];


  constructor(private equipmentService: EquipmentService) { }

  ngOnInit() {
    this.equipmentService.getEquipment().subscribe({
      next: (data: Items[]) => this.items = data,
      error: err => console.error("Error fetching equipment", err),
      complete: () => console.log("Equipment data fetch complete!")
    });
  }
}
