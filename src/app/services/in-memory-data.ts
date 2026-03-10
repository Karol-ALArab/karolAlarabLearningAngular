
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Items } from '../shared-models/items';

export class InMemoryDataService implements InMemoryDbService {

  createDb(): { items: Items[] } {

    const items: Items[] = [
      { id: 1, name: 'Soccer Ball', price: 30, description: 'Official size 5 match ball', image: '1.jpg', category: 'Equipment' },
      { id: 2, name: 'Soccer Cleats', price: 120, description: 'Clean lightweight cleats', image: '2.jpg', category: 'Footwear' },
      { id: 3, name: 'Goalkeeper Gloves', price: 60, description: 'Enhanced gloves for goalies', image: '3.jpg', category: 'Gear' },
      { id: 4, name: 'Team Jersey', price: 90, description: 'Official Real Madrid home jersey', image: '4.jpg', category: 'Apparel' },
      { id: 5, name: 'Shin Guards', price: 25, description: 'Lightweight shin guards', image: '5.jpg', category: 'Protection' },
      { id: 6, name: 'Training Cones', price: 20, description: 'Set of 12 training cones', image: '6.jpg', category: 'Training' }
    ];

    return { items };
  }
}
