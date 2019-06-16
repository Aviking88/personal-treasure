import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-treasure-modal',
  templateUrl: './treasure-modal.component.html',
  styleUrls: ['./treasure-modal.component.scss']
})
export class TreasureModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TreasureModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(){}

}
