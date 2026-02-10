import {Component, OnInit, signal} from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import {Items} from './shared-models/items';
import {EquipmentList} from './equipment-list/equipment-list';
import {EquipmentListItem} from './equipment-list-item/equipment-list-item';
import {EquipmentService} from './services/equipment';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,
    RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('karolAlarabLearningAngular');
  studentName: string = 'Karol Alarab';
  courseCode: string = 'MAD 307';
  selectedEquipment?: Items;


  constructor(private equipmentService: EquipmentService) { }

  ngOnInit() {
    this.equipmentService.getEquipmentById(1).subscribe({
      next: (data: Items | undefined) => this.selectedEquipment = data,
      error: err => console.error("Error ", err),
      complete: () => console.log("Success!")
    });
  }
}
