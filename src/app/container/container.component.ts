import { Component } from '@angular/core';
import { CompareDataService } from '../compareData.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
  providers: [CompareDataService]
})
export class ContainerComponent {

}
