import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { TreasureModalComponent } from './treasure-modal/treasure-modal.component';
export interface ITreasureData {
  iconUrl: string;
  name: string;
  password: string;
  lastUpdated: string;
  id?: string;
  viewMode: boolean;
}
const ELEMENT_DATA: ITreasureData[] = [
  { iconUrl: null, name: 'Facebook', password: 'asdf1234', lastUpdated: null, viewMode: true },
  { iconUrl: null, name: 'Facebook', password: 'asdf1234', lastUpdated: null, viewMode: true },
  { iconUrl: null, name: 'Facebook', password: 'asdf1234', lastUpdated: null, viewMode: true },
  { iconUrl: null, name: 'Facebook', password: 'asdf1234', lastUpdated: null, viewMode: true },
  { iconUrl: null, name: 'Facebook', password: 'asdf1234', lastUpdated: null, viewMode: true },
];
@Component({
  selector: 'app-treasure',
  templateUrl: './treasure.component.html',
  styleUrls: ['./treasure.component.scss'],
})
export class TreasureComponent implements OnInit {
  data: ITreasureData[] = ELEMENT_DATA;
  displayedColumns: string[] = ['iconUrl', 'name', 'password', 'lastUpdated'];
  dataSource = new MatTableDataSource<ITreasureData>(this.data);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  addTreasure() {
    // const data = { iconUrl: null, name: null, password: null, lastUpdated: null, viewMode: false };
    //  this.data.push(data);

    // this.dataSource = new MatTableDataSource<ITreasureData>(this.data);

    const dialogRef = this.dialog.open(TreasureModalComponent, {
      width: '250px',
      data: { name: 'this.name', animal: 'this.animal' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
