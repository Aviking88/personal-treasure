import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ITreasureData } from 'app/core-features';

@Component({
  selector: 'app-treasure-modal',
  templateUrl: './treasure-modal.component.html',
  styleUrls: ['./treasure-modal.component.scss']
})
export class TreasureModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TreasureModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITreasureData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() { }

  onSubmit() {
    this.dialogRef.close(this.data);
  }

}
