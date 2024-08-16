import { Observable } from "rxjs";
import { Tariff } from "./container/list-display/Tariff-interface";

export class DataService {

dataOrg: Tariff[] = [ {
      "id": 1,
      "name": "Tariff A",
      "price": 3.5,
      "supplier": "Company A",
      "description": "Description of Tariff A",
      checked: false
  }, {
      "id": 2,
      "name": "Tariff B",
      "price": 4.0,
      "supplier": "Company B",
      "description": "Description of Tariff B",
      checked: false
  }, {
      "id": 3,
      "name": "Tariff C",
      "price": 3.8,
      "supplier": "Company C",
      "description": "Description of Tariff C",
      checked: false
  }];

getData () : Observable<Tariff[]>{    
    return new Observable(observer => {
        observer.next(this.dataOrg.slice());
        observer.complete();
    });
  }


}
