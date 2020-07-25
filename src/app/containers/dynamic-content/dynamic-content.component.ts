import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { BottomSheetsComponent } from 'src/app/components/bottom-sheets/bottom-sheets.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.sass']
})
export class DynamicContentComponent implements OnInit {

  @Input('regions') regions;
  constructor(
    private bottomSheet: MatBottomSheet,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log(this.regions);

  }

  editRegion() {
    // this.bottomSheet.open(BottomSheetsComponent);

    const dialogRef = this.dialog.open(ModalComponent, {
      height: '60vh',
      width: '70vw',
      data: {
        name: 'sakshay'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });

  }

}
