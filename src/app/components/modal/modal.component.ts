import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GlobalDataService } from '../../shared/services/global-data.service';

export interface DialogData {
  type: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
})

export class ModalComponent implements OnInit, OnDestroy {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private globalData: GlobalDataService
  ) {}

  ngOnInit(): void {
    console.log(this.data);

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    this.globalData.modalClose.unsubscribe();
  }
}
