import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
export interface ITreasureData {
  iconUrl: string;
  name: string;
  password: string;
  lastUpdated: string;
  id?: string;
  viewMode: boolean;
}
const ELEMENT_DATA: ITreasureData[] = [ { iconUrl: null, name: 'Facebook', password: 'asdf1234', lastUpdated: null, viewMode: true },
{ iconUrl: null, name: 'Facebook', password: 'asdf1234', lastUpdated: null, viewMode: true },
{ iconUrl: null, name: 'Facebook', password: 'asdf1234', lastUpdated: null, viewMode: true },
{ iconUrl: null, name: 'Facebook', password: 'asdf1234', lastUpdated: null, viewMode: true },
{ iconUrl: null, name: 'Facebook', password: 'asdf1234', lastUpdated: null, viewMode: true },

];
@Component({
  selector: 'app-treasure',
  templateUrl: './treasure.component.html',
  styleUrls: ['./treasure.component.scss']
})
export class TreasureComponent implements OnInit {
  data: ITreasureData[] = [ { iconUrl: null, name: null, password: null, lastUpdated: null, viewMode: true } ];
  displayedColumns: string[] = ['iconUrl', 'name', 'password', 'lastUpdated'];
  dataSource = new MatTableDataSource<ITreasureData>(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit() {

  }


}
