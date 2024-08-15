import { Tariff } from "./list-display/Tariff-interface";

export class DataService {

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
  }];

getData () {
    return this.data;
  }


}
