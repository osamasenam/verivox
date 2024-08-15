import { Component, OnInit } from '@angular/core';
import { Tariff } from './Tariff-interface';
import { DataService } from '../data.service';
import { CompareDataService } from '../compareData.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrl: './list-display.component.scss',
})
export class ListDisplayComponent implements OnInit {
  
  data: Tariff[] = [];
  checkedItems: number = 0;

  constructor(
    private router: Router,
    private dataService: DataService,
    private compareDataService: CompareDataService
    ) { }
  ngOnInit(): void {
    this.data = this.dataService.getData();
  }

  onClickAsc() {
    this.data.sort((a,b) => a.price - b.price);
  }

  onClickDsc() {
    this.data.sort((a,b) => b.price - a.price);
  }  
  
  onCheck(e: any) {
    //count how many checked items
    this.checkedItems = this.data.filter(item => item.checked === true).length;

  }

  onClickCompare() {
    if(this.checkedItems > 3) {
      //show error message
      alert("Maximum 3 Tariffs to compare");
    } else {
      //navigate to the comparison page
      this.compareDataService.putCompareData(this.data.filter(item => item.checked === true));
      this.router.navigate(['compare']);
      
    }
  }
}
