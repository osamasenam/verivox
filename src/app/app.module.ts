import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDisplayComponent } from "./container/list-display/list-display.component";
import { FormsModule } from '@angular/forms';
import { CompareDisplayComponent } from './container/compare-display/compare-display.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    ListDisplayComponent,
    CompareDisplayComponent,
    ContainerComponent
    
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
