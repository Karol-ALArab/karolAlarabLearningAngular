import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { HighlightOnDirective } from '../directives/highlight-on';
import { EquipmentService } from '../services/equipment';
import { Items } from '../shared-models/items';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [CommonModule, NgIf, ReactiveFormsModule, HighlightOnDirective],
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
      id: [null],
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      category: [''],
      description: ['', Validators.required],
      image: [''],
      dateAdded: ['']
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.equipmentService.getEquipmentById(id).subscribe({
        next: (item) => {
          if (item) {
            this.itemForm.patchValue(item);
            this.error = null;
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
    if (this.itemForm.valid) {
      const item: Items = this.itemForm.value;

      if (item.id && item.id > 0) {
        this.equipmentService.updateEquipment(item).subscribe({
          next: () => {
            this.error = null;
            this.router.navigate(['/equipment']);
          },
          error: (err) => {
            this.error = 'Error updating equipment';
            console.error(err);
          }
        });
      } else {
        this.equipmentService.addEquipment(item).subscribe({
          next: () => {
            this.error = null;
            this.router.navigate(['/equipment']);
          },
          error: (err) => {
            this.error = 'Error adding equipment';
            console.error(err);
          }
        });
      }
    }
  }

  onDelete(): void {
    const id = Number(this.itemForm.value.id);

    if (id) {
      this.equipmentService.deleteEquipment(id).subscribe({
        next: () => {
          this.error = null;
          this.router.navigate(['/equipment']);
        },
        error: (err) => {
          this.error = 'Error deleting equipment';
          console.error(err);
        }
      });
    }
  }

  navBackToEquipmentList(): void {
    this.router.navigate(['/equipment']);
  }
}
