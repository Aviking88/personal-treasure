import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { TreasureModalComponent } from './treasure-modal/treasure-modal.component';
import * as CryptoJS from 'crypto-js';
export interface ITreasureData {
  iconUrl: string;
  name: string;
  userId: string;
  password: string;
  lastUpdated: string;
  id?: string;
  viewMode: boolean;
}
const ELEMENT_DATA: ITreasureData[] = [
  { id: '0sfsds', iconUrl: null, name: 'Facebook', userId: 'Facebook', password: 'asdf1234', lastUpdated: null, viewMode: true },
  { id: 'sdfs0', iconUrl: null, name: 'Facebook', userId: 'Facebook', password: 'asdf1234', lastUpdated: null, viewMode: true },
  { id: 'sefr0', iconUrl: null, name: 'Facebook', userId: 'Facebook', password: 'asdf1234', lastUpdated: null, viewMode: true },
  { id: 'sdfgrs0', iconUrl: null, name: 'Facebook', userId: 'Facebook', password: 'asdf1234', lastUpdated: null, viewMode: true },
  { id: 'fgdv0sd', iconUrl: null, name: 'Facebook', userId: 'Facebook', password: 'asdf1234', lastUpdated: null, viewMode: true },
];
@Component({
  selector: 'app-treasure',
  templateUrl: './treasure.component.html',
  styleUrls: ['./treasure.component.scss'],
})
export class TreasureComponent implements OnInit {
  data: ITreasureData[] = ELEMENT_DATA;
  displayedColumns: string[] = ['iconUrl', 'name', 'link', 'userId', 'password', 'lastUpdated'];
  dataSource = new MatTableDataSource<ITreasureData>(this.data);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  addTreasure() {
    const dialogRef = this.dialog.open(TreasureModalComponent, {
      width: '250px',
      data: { iconUrl: null, name: null, userId: null, password: null, lastUpdated: null, viewMode: true },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }

  editTreasure(data: ITreasureData) {
    const dialogRef = this.dialog.open(TreasureModalComponent, {
      data: {
        id: data.id,
        iconUrl: data.iconUrl,
        name: data.name,
        password: data.password,
        lastUpdated: data.lastUpdated,
        viewMode: data.viewMode,
      },
    });

    dialogRef.afterClosed().subscribe((result: ITreasureData) => {
      if (result) {
        const index = this.data.findIndex((i) => i.id === result.id);
        console.log(this.data[index]);
        this.data[index] = result;
      }

      console.log('The dialog was closed', result);
    });
  }
}
