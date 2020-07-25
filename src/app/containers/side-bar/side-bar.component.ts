import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlobalDataService } from '../../shared/services/global-data.service';
import { ModalComponent } from '../../components/modal/modal.component';
import { Region } from 'src/app/shared/enums/region.enum';
import { ICity } from '../../shared/models/interfaces/ICity';
import { IRegion } from '../../shared/models/interfaces/IRegion';

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
    this.globalDataService.regions.subscribe(
      r => {
        localStorage.setItem('regions', JSON.stringify(r));

      }
    );
  }
  addRegion(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      height: '70vh',
      width: '70vw',
      data: {
        type: Region.CREATE
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  deleteRegion(name){
    const index = this.globalDataService.regions.value.findIndex(r => r.name === name);
    this.globalDataService.regions.value.splice(index, 1);
    this.globalDataService.regions.next(this.globalDataService.regions.value);
    if (this.globalDataService.selectedRegion.value.name === name) {
    this.globalDataService.selectedRegion.next({
      name: '',
      cities: []
    });
    }
  }
}
