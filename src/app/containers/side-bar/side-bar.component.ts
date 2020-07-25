import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlobalDataService } from '../../shared/services/global-data.service';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.sass']
})
export class SideBarComponent implements OnInit {

  regions = [];
  constructor(
    public globalDataService: GlobalDataService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  addRegion(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      height: '60vh',
      width: '70vw',
      data: {
        type: 'ADD'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
