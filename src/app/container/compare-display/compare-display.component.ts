import { Component, OnInit } from '@angular/core';
import { Tariff } from '../list-display/Tariff-interface';
import { CompareDataService } from '../../compareData.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compare-display',
  templateUrl: './compare-display.component.html',
  styleUrl: './compare-display.component.scss',
})
export class CompareDisplayComponent implements OnInit {
  
  data: Tariff[] = [];
  checkedItems: number = 0;

  constructor(
    private router: Router,
    private compareDataService: CompareDataService) { 
      
    }
  
    ngOnInit(): void {
      this.data = this.compareDataService.getCompareData();

      this.compareDataService.compareDataChanged
      .subscribe(
        (data: any) => {
          this.data = data;
        }
      );
    }  

    onClickBack() {
      this.router.navigate(['']);
    }

}
