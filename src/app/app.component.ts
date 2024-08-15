import { Component } from '@angular/core';
import { DataService } from './data.service';
import { CompareDataService } from './compareData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService, CompareDataService]
})
export class AppComponent {
  title = 'verivox';
}
