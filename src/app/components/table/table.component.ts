import { Component, Input, OnInit } from '@angular/core';
import { GlobalDataService } from '../../shared/services/global-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {
  @Input('type') type;
  colors = [
    {
      id: 'blue',
      label: 'Blue'
    },
    {
      id: 'red',
      label: 'Red'
    },
    {
      id: 'green',
      label: 'Green'
    },
    {
      id: 'purple',
      label: 'Purple'
    }
  ];
  cities = [];
  constructor(
    public globalDataService: GlobalDataService
  ) { }

  ngOnInit(): void {
  }

}
