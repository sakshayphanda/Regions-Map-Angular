import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetsComponent } from 'src/app/components/bottom-sheets/bottom-sheets.component';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.sass']
})
export class DynamicContentComponent implements OnInit {

  @Input('regions') regions;
  constructor(
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit(): void {
    console.log(this.regions);

  }

  editRegion() {
    this.bottomSheet.open(BottomSheetsComponent);

  }

}
