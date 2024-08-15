import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDisplayComponent } from "./list-display/list-display.component";
import { FormsModule } from '@angular/forms';
import { CompareDisplayComponent } from './compare-display/compare-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ListDisplayComponent,
    CompareDisplayComponent
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
