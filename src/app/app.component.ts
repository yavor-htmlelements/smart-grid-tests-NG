import { newArray } from '@angular/compiler/src/util';
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import {GetData} from '../assets/data';
import { InputComponent } from 'smart-webcomponents-angular/input';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('grid', { read: GridComponent, static: false }) grid: GridComponent;
	@ViewChild('input', { read: InputComponent, static: false }) input: InputComponent;
  // columns = [
  //   { label: 'Id', dataField: 'id' },
  //   { label: 'Name', dataField: 'name' }
  // ];

  gridCheck: boolean = false;
  navItems;

  columns:any = [
    { label: 'Name11', dataField: 'id', width: '30%' },
    { label: 'Value11', dataField: 'name', width: '70%' }
  ];

  coldataFields:any = ['id', 'name'];

  columns2:any = [
    { label: 'Name22', dataField: 'id', width: '30%' },
    { label: 'Value22', dataField: 'name', width: '70%' }
  ];

  columns3:any = [
    { label: 'Shorthand333', dataField: 'baseId', width: '30%' },
    { label: 'Full Name333', dataField: 'name', width: '70%' }
  ];

  sourceInput = ['Custom 1', 'Custom 2'];

  data = [
    { id: 1, name: 'Hydrogen111111111111' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
    { id: 21, name: 'Silicon 2' },
    { id: 22, name: 'Phosphorus 2' },
    { id: 23, name: 'Sulfur 2' },
    { id: 24, name: 'Chlorine 2' },
    { id: 25, name: 'Argon 2' },
    { id: 26, name: 'Potassium 2' },
    { id: 27, name: 'Calcium 2' },
   
    { id: 1, name: 'Hydrogen' },
    { id: 2, name: 'Helium' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
    { id: 21, name: 'Silicon 2' },
    { id: 22, name: 'Phosphorus 2' },
    { id: 23, name: 'Sulfur 2' },
    { id: 24, name: 'Chlorine 2' },
    { id: 25, name: 'Argon 2' },
    { id: 26, name: 'Potassium 2' },
    { id: 27, name: 'Calcium 2' },
    { id: 31, name: 'Hydrogen' },
    { id: 32, name: 'Helium' },
    { id: 33, name: 'Lithium' },
    { id: 34, name: 'Beryllium' },
    { id: 35, name: 'Boron' },
    { id: 36, name: 'Carbon' },
    { id: 37, name: 'Nitrogen' },
    { id: 38, name: 'Oxygen' },
    { id: 39, name: 'Fluorine' },
    { id: 310, name: 'Neon' },
    { id: 311, name: 'Sodium' },
    { id: 312, name: 'Magnesium' },
    { id: 313, name: 'Aluminum' },
    { id: 314, name: 'Silicon' },
    { id: 315, name: 'Phosphorus' },
    { id: 316, name: 'Sulfur' },
    { id: 317, name: 'Chlorine' },
    { id: 318, name: 'Argon' },
    { id: 319, name: 'Potassium' },
    { id: 320, name: 'Calcium' },
    { id: 321, name: 'Silicon 2' },
    { id: 322, name: 'Phosphorus 2' },
    { id: 323, name: 'Sulfur 2' },
    { id: 324, name: 'Chlorine 2' },
    { id: 325, name: 'Argon 2' },
    { id: 326, name: 'Potassium 2' },
    { id: 327, name: 'Calcium 2' },
    { id: 41, name: 'Hydrogen' },
    { id: 42, name: 'Helium' },
    { id: 43, name: 'Lithium' },
    { id: 44, name: 'Beryllium' },
    { id: 45, name: 'Boron' },
    { id: 46, name: 'Carbon' },
    { id: 47, name: 'Nitrogen' },
    { id: 48, name: 'Oxygen' },
    { id: 49, name: 'Fluorine' },
    { id: 410, name: 'Neon' },
    { id: 411, name: 'Sodium' },
    { id: 412, name: 'Magnesium' },
    { id: 413, name: 'Aluminum' },
    { id: 414, name: 'Silicon' },
    { id: 415, name: 'Phosphorus' },
    { id: 416, name: 'Sulfur' },
    { id: 417, name: 'Chlorine' },
    { id: 418, name: 'Argon' },
    { id: 419, name: 'Potassium' },
    { id: 420, name: 'Calcium' },
    { id: 421, name: 'Silicon 2' },
    { id: 422, name: 'Phosphorus 2' },
    { id: 423, name: 'Sulfur 2' },
    { id: 424, name: 'Chlorine 2' },
    { id: 425, name: 'Argon 2' },
    { id: 426, name: 'Potassium 2' },
    { id: 427, name: 'Calcium 2' }
  ];

  data2 = [
   
    { id: 1, name: 'Hydrogen222222222222222' },
    { id: 2, name: 'Helium2222222' },
    { id: 3, name: 'Lithium' },
    { id: 4, name: 'Beryllium' },
    { id: 5, name: 'Boron' },
    { id: 6, name: 'Carbon' },
    { id: 7, name: 'Nitrogen' },
    { id: 8, name: 'Oxygen' },
    { id: 9, name: 'Fluorine' },
    { id: 10, name: 'Neon' },
    { id: 11, name: 'Sodium' },
    { id: 12, name: 'Magnesium' },
    { id: 13, name: 'Aluminum' },
    { id: 14, name: 'Silicon' },
    { id: 15, name: 'Phosphorus' },
    { id: 16, name: 'Sulfur' },
    { id: 17, name: 'Chlorine' },
    { id: 18, name: 'Argon' },
    { id: 19, name: 'Potassium' },
    { id: 20, name: 'Calcium' },
    { id: 21, name: 'Silicon 2' },
    { id: 22, name: 'Phosphorus 2' },
    { id: 23, name: 'Sulfur 2' },
    { id: 24, name: 'Chlorine 2' },
    { id: 25, name: 'Argon 2' },
    { id: 26, name: 'Potassium 2' },
    { id: 27, name: 'Calcium 2' },
    { id: 31, name: 'Hydrogen' },
    { id: 32, name: 'Helium' },
    { id: 33, name: 'Lithium' },
    { id: 34, name: 'Beryllium' },
    { id: 35, name: 'Boron' },
    { id: 36, name: 'Carbon' },
    { id: 37, name: 'Nitrogen' },
    { id: 38, name: 'Oxygen' },
    { id: 39, name: 'Fluorine' },
    { id: 310, name: 'Neon' },
    { id: 311, name: 'Sodium' },
    { id: 312, name: 'Magnesium' },
    { id: 313, name: 'Aluminum' },
    { id: 314, name: 'Silicon' },
    { id: 315, name: 'Phosphorus' },
    { id: 316, name: 'Sulfur' },
    { id: 317, name: 'Chlorine' },
    { id: 318, name: 'Argon' },
    { id: 319, name: 'Potassium' },
    { id: 320, name: 'Calcium' },
    { id: 321, name: 'Silicon 2' },
    { id: 322, name: 'Phosphorus 2' },
    { id: 323, name: 'Sulfur 2' },
    { id: 324, name: 'Chlorine 2' },
    { id: 325, name: 'Argon 2' },
    { id: 326, name: 'Potassium 2' },
    { id: 327, name: 'Calcium 2' },
    { id: 41, name: 'Hydrogen' },
    { id: 42, name: 'Helium' },
    { id: 43, name: 'Lithium' },
    { id: 44, name: 'Beryllium' },
    { id: 45, name: 'Boron' },
    { id: 46, name: 'Carbon' },
    { id: 47, name: 'Nitrogen' },
    { id: 48, name: 'Oxygen' },
    { id: 49, name: 'Fluorine' },
    { id: 410, name: 'Neon' },
    { id: 411, name: 'Sodium' },
    { id: 412, name: 'Magnesium' },
    { id: 413, name: 'Aluminum' },
    { id: 414, name: 'Silicon' },
    { id: 415, name: 'Phosphorus' },
    { id: 416, name: 'Sulfur' },
    { id: 417, name: 'Chlorine' },
    { id: 418, name: 'Argon' },
    { id: 419, name: 'Potassium' },
    { id: 420, name: 'Calcium' },
    { id: 421, name: 'Silicon 2' },
    { id: 422, name: 'Phosphorus 2' },
    { id: 423, name: 'Sulfur 2' },
    { id: 424, name: 'Chlorine 2' },
    { id: 425, name: 'Argon 2' },
    { id: 426, name: 'Potassium 2' },
    { id: 427, name: 'Calcium 2' }
  ];

  data3 = [
  
    { baseId: 1, name: 'Hydrogen3333333333333333333333333333' },
    { baseId: 2, name: 'Helium' },
    { baseId: 3, name: 'Lithium' },
    { baseId: 4, name: 'Beryllium' },
    { baseId: 5, name: 'Boron' },
    { baseId: 6, name: 'Carbon' },
    { baseId: 7, name: 'Nitrogen' },
    { baseId: 8, name: 'Oxygen' },
    { baseId: 9, name: 'Fluorine' },
    { baseId: 10, name: 'Neon' },
    { baseId: 11, name: 'Sodium' },
    { baseId: 12, name: 'Magnesium' },
    { baseId: 13, name: 'Aluminum' },
    { baseId: 14, name: 'Silicon' },
    { baseId: 15, name: 'Phosphorus' },
    { baseId: 16, name: 'Sulfur' },
    { baseId: 17, name: 'Chlorine' },
    { baseId: 18, name: 'Argon' },
    { baseId: 19, name: 'Potassium' },
    { baseId: 20, name: 'Calcium' },
    { baseId: 21, name: 'Silicon 3' },
    { baseId: 22, name: 'Phosphorus 3' },
    { baseId: 23, name: 'Sulfur 3' },
    { baseId: 24, name: 'Chlorine 3' },
    { baseId: 25, name: 'Argon 3' },
    { baseId: 26, name: 'Potassium 3' },
    { baseId: 27, name: 'Calcium 3' },
    { baseId: 31, name: 'Hydrogen' },
    { baseId: 32, name: 'Helium' },
    { baseId: 33, name: 'Lithium' },
    { baseId: 34, name: 'Beryllium' },
    { baseId: 35, name: 'Boron' },
    { baseId: 36, name: 'Carbon' },
    { baseId: 37, name: 'Nitrogen' },
    { baseId: 38, name: 'Oxygen' },
    { baseId: 33339, name: 'Fluorine' },

  ];
  source2:any = {
    dataSource: this.data2,
    dataFields: [
      { name: 'id', type: 'number' },
      { name: 'name', type: 'string' }
    ],
    datatype: 'array',
  }
  source:any = {
    dataSource:this.data,
    dataFields: [
      { name: 'id', type: 'number' },
      { name: 'name', type: 'string' }
    ],
    datatype: 'json',
  };
  
  source3:any = {
    dataSource: this.data3,
    dataFields: [
      { name: 'baseId', type: 'number' },
      { name: 'name', type: 'string' }
    ],
    datatype: 'array',
  }


  DataAdapter: any = new Smart.DataAdapter(this.source);

  ngOnInit() {
    console.log('ngOnInit()', this);
    this.navItems = [
      { 'displayName': 'Home', 'url': 'home', 'openNewTab': false, 'roles': ['*'], 'childNavs': [] }, { 'displayName': 'Faim Metra', 'url': 'faim-metra', 'openNewTab': true, 'roles': ['*'], 'childNavs': [] }, { 'displayName': 'Custom Control', 'url': 'custom', 'openNewTab': false, 'roles': ['*'], 'childNavs': [{ 'displayName': 'Custom', 'url': 'custom', 'openNewTab': false, 'roles': ['*'] }, { 'displayName': 'JQX Custom Grid', 'url': 'custom/grid', 'openNewTab': true, 'roles': ['*'] }] }
    ];


  }

  ngAfterViewInit() {
    // RD(3/31/21): setTimeOut is needed to prevent this error:
    // ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked
    // setTimeout(() => {
    //   this.switchGrid();
    // });
  }

  isFirstLoad = true;
  selectedIndex = 0;

  switchGrid() {
    if (this.gridCheck) {
      this.coldataFields = ['baseId', 'name'];
     
      
  
    //   this.source.dataSource = this.data3
    //     this.source.dataFields = [
    //     { name: 'baseId', type: 'number' },
    //      { name: 'name', type: 'string' }
    //     ]
		this.columns = [
			{ label: 'Shorthand3333', dataField: 'baseId', width: '30%' },
			 { label: 'Full Name3333', dataField: 'name', width: '70%' }
		   ]
		   this.DataAdapter= new Smart.DataAdapter(this.source3);
     // this.grid.setcolumnproperty('baseId', 'label', 'Shorthand3333');
      //this.grid.setcolumnproperty('name', 'label', 'Full Name3333');
    
    } else {
      this.coldataFields = ['id', 'name'];
       this.columns=[
         { label: 'Name222', dataField: 'id', width: '30%' },
        { label: 'Value222', dataField: 'name', width: '70%' }
       ]
    //   this.source.dataSource = this.data2
    //   this.source.dataFields = [
    //   { name: 'id', type: 'number' },
    //    { name: 'name', type: 'string' }
    //   ]
	  this.DataAdapter= new Smart.DataAdapter(this.source2);
     // this.grid.setcolumnproperty('id', 'label', 'Name222');
      //this.grid.setcolumnproperty('name', 'label', 'Value222');
  
 
    }
   
    
    this.grid.refresh()
    this.grid.refreshView();
    //this.grid.render();
  
    //this.grid.render();
  
    this.gridCheck = !this.gridCheck;
  }
  

}