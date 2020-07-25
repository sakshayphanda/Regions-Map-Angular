import { Component, Input, OnInit } from '@angular/core';
import { GlobalDataService } from '../../shared/services/global-data.service';
import { IRegion } from '../../shared/models/interfaces/IRegion';
import { ICity } from '../../shared/models/interfaces/ICity';
import { Region } from 'src/app/shared/enums/region.enum';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
})
export class TableComponent implements OnInit {
  @Input('type') type;
  colors = [
    {
      id: 'blue',
      label: 'Blue',
    },
    {
      id: 'red',
      label: 'Red',
    },
    {
      id: 'green',
      label: 'Green',
    },
    {
      id: 'purple',
      label: 'Purple',
    },
  ];
  cities = [];
  newRegion: IRegion = {
    name: '',
    cities: [],
  };

  region = Region;
  city: ICity = {} as ICity;
  constructor(public globalDataService: GlobalDataService) {}

  ngOnInit(): void {
    if (this.type !== this.region.CREATE) {
      console.log(this.globalDataService.selectedRegion.value);

      this.newRegion = this.globalDataService.selectedRegion.value;
    }
  }

  addCity() {
    this.newRegion.cities.push(this.city);
  }

  updateRegions() {
    if (this.type === Region.CREATE) {
      this.newRegion.cities.push(this.city);
      const prevRegions = this.globalDataService.regions.value;
      prevRegions.push(this.newRegion);
      console.log(this.newRegion, prevRegions);
    } else {
     // this.newRegion.cities.push(this.city);
      let prevRegions = [...this.globalDataService.regions.value];
      prevRegions = prevRegions.map(region => {
        if (region.name === this.globalDataService.selectedRegion.value.name) {
          return this.newRegion;
        }
      });

      this.globalDataService.selectedRegion.next(this.newRegion);
    }
  }
}
