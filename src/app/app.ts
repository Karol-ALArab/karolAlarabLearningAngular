import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {Items} from './shared-models/items';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('karolAlarabLearningAngular');
  studentName: string = 'Karol Alarab';
  courseCode: string = 'MAD 307';

  items: Items[] = [
    { id: 1, name: 'Soccer Ball', price: 30, category: 'Equipment', description: 'Official size 5 match ball' },
    { id: 2, name: 'Soccer Cleats', price: 120, category: 'Footwear', description: 'Clean Light weight cleats' },
    { id: 3, name: 'Goalkeeper Gloves', price: 60, category: 'Gear', description: 'Enhanced gloves for goalies' },
    { id: 4, name: 'Team Jersey', price: 90, category: 'Apparel', description: 'Official Real Madrid home jersey' },
    { id: 5, name: 'Shin Guards', price: 25, category: 'Protection', description: 'Lightweight shin guards' },
    { id: 6, name: 'Training Cones', price: 20, category: 'Training', description: 'Set of 12 training cones' }
  ];
}
