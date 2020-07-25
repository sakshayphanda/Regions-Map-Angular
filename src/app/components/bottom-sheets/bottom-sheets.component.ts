import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheets',
  templateUrl: './bottom-sheets.component.html',
  styleUrls: ['./bottom-sheets.component.sass']
})
export class BottomSheetsComponent {

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetsComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
