import { ComponentFixture, TestBed, fakeAsync, inject } from '@angular/core/testing';

import { ListDisplayComponent } from './list-display.component';
import { DataService } from 'src/app/data.service';
import { CompareDataService } from 'src/app/compareData.service';
import { Router } from '@angular/router';

describe('ListDisplayComponent', () => {
  let component: ListDisplayComponent;
  let fixture: ComponentFixture<ListDisplayComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListDisplayComponent],
      providers: [DataService, CompareDataService, { provide: Router, useValue: mockRouter }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call Asc sort when Asc button clicked', fakeAsync(() => {
    spyOn(component, 'onClickAsc');
  
    let button = fixture.debugElement.nativeElement.querySelector('#button_asc');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.onClickAsc).toHaveBeenCalled();
    });
  }));

  it('should call Dsc sort when Dsc button clicked', fakeAsync(() => {
    spyOn(component, 'onClickDsc');
  
    let button = fixture.debugElement.nativeElement.querySelector('#button_dsc');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.onClickDsc).toHaveBeenCalled();
    });
  }));

  it('should call onCheck when checkbox clicked', fakeAsync(() => {
    spyOn(component, 'onCheck');
  
    let button = fixture.debugElement.nativeElement.querySelector('#checkbox_1');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.onCheck).toHaveBeenCalled();
    });
  }));

  it('should call compare when compare button clicked', fakeAsync(() => {
    spyOn(component, 'onClickCompare');
  
    let button = fixture.debugElement.nativeElement.querySelector('#button_compare');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.onClickCompare).toHaveBeenCalled();
    });
  }));

  it('should sort Asc correct', fakeAsync(() => {
    let dataAsc = [ {
      "id": 1,
      "name": "Tariff A",
      "price": 3.5,
      "supplier": "Company A",
      "description": "Description of Tariff A",
      checked: false
  }, {
    "id": 3,
    "name": "Tariff C",
    "price": 3.8,
    "supplier": "Company C",
    "description": "Description of Tariff C",
    checked: false
}, {
      "id": 2,
      "name": "Tariff B",
      "price": 4.0,
      "supplier": "Company B",
      "description": "Description of Tariff B",
      checked: false
  }];

    component.onClickAsc();

    fixture.whenStable().then(() => {
      expect(component.data).toEqual(dataAsc);
    });
  }));

  it('should sort Dsc correct', fakeAsync(() => {
   
  let dataDsc = [ {
    "id": 2,
    "name": "Tariff B",
    "price": 4.0,
    "supplier": "Company B",
    "description": "Description of Tariff B",
    checked: false
}, {
  "id": 3,
  "name": "Tariff C",
  "price": 3.8,
  "supplier": "Company C",
  "description": "Description of Tariff C",
  checked: false
}, {
    "id": 1,
    "name": "Tariff A",
    "price": 3.5,
    "supplier": "Company A",
    "description": "Description of Tariff A",
    checked: false
} ];
    component.onClickDsc();

    fixture.whenStable().then(() => {
      expect(component.data).toEqual(dataDsc);
    });
  }));

  it('should call countCheckedItems when selected item', fakeAsync(() => {
  
    spyOn(component, 'countCheckedItems');

    let button1 = fixture.debugElement.nativeElement.querySelector('#checkbox_1');

    button1.click();

    fixture.whenStable().then(() => {
      expect(component.countCheckedItems).toHaveBeenCalled();
    });
  }));

  it('should show error if checkedItems > 3', fakeAsync(() => {
    spyOn(window, "alert");
    component.checkedItems = 4;
    component.onClickCompare();

    fixture.whenStable().then(() => {
      expect(window.alert).toHaveBeenCalledWith("Maximum 3 Tariffs to compare");

    });
  }));

  it('should show error if checkedItems < 2', fakeAsync(() => {
    spyOn(window, "alert");
    component.checkedItems = 1;
    component.onClickCompare();

    fixture.whenStable().then(() => {
      expect(window.alert).toHaveBeenCalledWith("Choose more than 1 Tariff to compare");

    });
  }));

  
  it('should navigate to compare', () => {
    component.checkedItems = 2;
    fixture.detectChanges();
    component.onClickCompare();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['compare']);
  });







});
