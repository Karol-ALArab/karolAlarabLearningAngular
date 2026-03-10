import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

import { Items } from '../shared-models/items';
import { EquipmentListItem } from '../equipment-list-item/equipment-list-item';
import { EquipmentService } from '../services/equipment';

@Component({
  selector: 'app-equipment-list',
  standalone: true,
  imports: [EquipmentListItem, NgFor, NgIf],
  templateUrl: './equipment-list.html',
  styleUrl: './equipment-list.css',
})
export class EquipmentList implements OnInit {

  items: Items[] = [];
  error: string | null = null;
  constructor(
    private equipmentService: EquipmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEquipment();
  }

  loadEquipment(): void {
    this.equipmentService.getEquipment().subscribe({
      next: (data: Items[]) => {
        this.items = data;
        this.error = null;
        console.log('Items received:', data);
      },
      error: err => console.error('Error fetching equipment', err),
      complete: () => console.log('Equipment data fetch complete!')
    });
  }

  editItem(id: number): void {
    this.router.navigate(['/modify', id]);
  }


  deleteItem(id: number): void {
    this.equipmentService.deleteEquipment(id).subscribe({
      next: () => {
        this.error = null;
        this.loadEquipment();
      },
      error: err => {
        this.error = 'Error deleting equipment';
        console.error('Error deleting equipment', err);
      }
    });
  }}
