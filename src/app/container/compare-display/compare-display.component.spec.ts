import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { CompareDisplayComponent } from './compare-display.component';
import { CompareDataService } from 'src/app/compareData.service';
import { DataService } from 'src/app/data.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('CompareDisplayComponent', () => {
  let component: CompareDisplayComponent;
  let fixture: ComponentFixture<CompareDisplayComponent>;

  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompareDisplayComponent],
      providers: [DataService, CompareDataService, { provide: Router, useValue: mockRouter }],
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

  it('should navigate to main', () => {
    fixture.detectChanges();
    component.onClickBack();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['']);
  });


});
