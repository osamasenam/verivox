import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Tariff } from './Tariff-interface';
import { DataService } from '../data.service';


@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrl: './list-display.component.scss',
  providers: [DataService]
})
export class ListDisplayComponent implements OnInit {
  
  data: Tariff[] = [];
  
  constructor(
    private dataService: DataService,
    private changeDetector: ChangeDetectorRef
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
  
}
