import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

import { Items } from '../shared-models/items';
import { EquipmentListItem } from '../equipment-list-item/equipment-list-item';
import { EquipmentService } from '../services/equipment';

@Component({
  selector: 'app-equipment-list',
  standalone: true,
  imports: [EquipmentListItem, NgFor],
  templateUrl: './equipment-list.html',
  styleUrl: './equipment-list.css',
})
export class EquipmentList implements OnInit {

  items: Items[] = [];

  constructor(
    private equipmentService: EquipmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEquipment();
  }

  loadEquipment(): void {
    this.equipmentService.getEquipment().subscribe({
      next: (data: Items[]) => this.items = data,
      error: err => console.error('Error fetching equipment', err),
      complete: () => console.log('Equipment data fetch complete!')
    });
  }

  editItem(id: number): void {
    this.router.navigate(['/modify', id]);
  }

  deleteItem(id: number): void {
    this.equipmentService.deleteEquipment(id);
    this.loadEquipment();
  }
}
