import { EventEmitter, Injectable } from "@angular/core";
import { Tariff } from "./container/list-display/Tariff-interface";

export class CompareDataService {

private compareData: Tariff[] = [];
compareDataChanged = new EventEmitter<Tariff[]>();

getCompareData () {
    return this.compareData;
  }

putCompareData (data: any) {
    this.compareData = data;    
    this.compareDataChanged.emit(this.compareData);
}


}
