import { Component } from '@angular/core';
import { Tariff } from './Tariff-interface';


@Component({
  selector: 'app-list-display',
  standalone: false,
  templateUrl: './list-display.component.html',
  styleUrl: './list-display.component.scss'
})
export class ListDisplayComponent {
  
  data: Tariff[] = [ {
    "id": 1,
    "name": "Tariff A",
    "price": 3.5,
    "supplier": "Company A",
    "description": "Description of Tariff A Description of Tariff A Description of Tariff A"
  }, {
    "id": 2,
    "name": "Tariff B",
    "price": 4.0,
    "supplier": "Company B",
    "description": "Description of Tariff B"
  }, {
    "id": 3,
    "name": "Tariff C",
    "price": 3.8,
    "supplier": "Company C",
    "description": "Description of Tariff C"
  },{
    "id": 1,
    "name": "Tariff A",
    "price": 3.5,
    "supplier": "Company A",
    "description": "Description of Tariff A"
  }, {
    "id": 2,
    "name": "Tariff B",
    "price": 4.0,
    "supplier": "Company B",
    "description": "Description of Tariff B"
  }, {
    "id": 3,
    "name": "Tariff C",
    "price": 3.8,
    "supplier": "Company C",
    "description": "Description of Tariff C"
  }]
}
