import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { CompareDisplayComponent } from './compare-display.component';
import { CompareDataService } from 'src/app/compareData.service';
import { DataService } from 'src/app/data.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('CompareDisplayComponent', () => {
  let component: CompareDisplayComponent;
  let fixture: ComponentFixture<CompareDisplayComponent>;

  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompareDisplayComponent],
      providers: [DataService, CompareDataService],
      imports: [FormsModule, RouterModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onClickBack when back button clicked', () => {
    spyOn(component, 'onClickBack');
    let button = fixture.debugElement.nativeElement.querySelector('#button_back');
    button.click();
    expect(component.onClickBack).toHaveBeenCalled();
    
  });




});
