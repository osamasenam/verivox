import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDisplayComponent } from './container/list-display/list-display.component';
import { CompareDisplayComponent } from './container/compare-display/compare-display.component';

const routes: Routes = [
  { path: '', component:ListDisplayComponent },
  { path: 'compare', component:CompareDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
