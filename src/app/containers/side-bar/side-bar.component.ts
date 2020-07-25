import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../../shared/services/global-data.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.sass']
})
export class SideBarComponent implements OnInit {

  regions = [];
  constructor(
    public globalDataService: GlobalDataService
  ) { }

  ngOnInit(): void {
  }

}
