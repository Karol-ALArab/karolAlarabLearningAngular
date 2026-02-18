import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';

import { EquipmentService } from '../services/equipment';
import { Items } from '../shared-models/items';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [CommonModule, NgIf, ReactiveFormsModule],
  templateUrl: './modify-list-item.html',
  styleUrl: './modify-list-item.css'
})
export class ModifyListItem implements OnInit {


  itemForm: FormGroup;
  item: Items | undefined;
  error: string | null = null;

  constructor(
    private equipmentService: EquipmentService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.itemForm = this.fb.group({
      id: [null], // leave blank for create; filled when editing
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      description: ['', Validators.required],
      image: [''] // optional
    });
  }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.equipmentService.getEquipmentById(id).subscribe({
        next: (item) => {
          if (item) {
            this.itemForm.patchValue(item);
          }
        },
        error: (err) => {
          this.error = 'Error Fetching Equipment';
          console.error('Error Fetching: ', err);
        }
      });
    }
  }

  onSubmit(): void {
    if (!this.itemForm.valid) return;

    const item: Items = this.itemForm.value;


    if (!isNaN(Number(item.id)) && Number(item.id) > 0) {
      this.equipmentService.updateEquipment(item)
        .subscribe(() => this.router.navigate(['/equipment']));
    } else {
      item.id = this.equipmentService.generateNewId();
      this.equipmentService.addEquipment(item)
        .subscribe(() => this.router.navigate(['/equipment']));
    }
  }

  onDelete(): void {
    const id = Number(this.itemForm.value.id);
    if (id) {
      this.equipmentService.deleteEquipment(id);
      this.router.navigate(['/equipment']);
    }
  }

  navBackToEquipmentList(): void {
    this.router.navigate(['/equipment']);
  }
}
