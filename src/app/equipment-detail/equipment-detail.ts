import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Items} from '../shared-models/items';
import {EquipmentService} from '../services/equipment';
import {CurrencyPipe, DatePipe, NgIf, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-equipment-detail',
  imports: [
    NgIf,
    UpperCasePipe,
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './equipment-detail.html',
  styleUrl: './equipment-detail.css',
})
export class EquipmentDetail  implements OnInit {
  item?: Items;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private equipmentService: EquipmentService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.equipmentService.getEquipmentById(id).subscribe({
      next: (data) => {
        this.item = data;
      },
      error: () => {
        this.error = 'Could not load equipment details.';
      }
    });
  }
}


