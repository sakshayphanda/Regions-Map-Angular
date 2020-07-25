import { Component, Input, OnInit } from '@angular/core';
import { GlobalDataService } from '../../shared/services/global-data.service';
import { IRegion } from '../../shared/models/interfaces/IRegion';
import { ICity } from '../../shared/models/interfaces/ICity';
import { Region } from 'src/app/shared/enums/region.enum';
import {Sort} from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
})
export class TableComponent implements OnInit {
  @Input('type') type;
  @Input('modalRef') modalRef;
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
  city: ICity = {
    disabled: false,
    latitude: null,
    longitude: null,
    color: null,
    volume: '',
    name: ''
  };
  nameError: boolean = false;
  errorMsg: string;
  constructor(public globalDataService: GlobalDataService) {

  }

  ngOnInit(): void {
    if (this.type !== this.region.CREATE) {
      console.log(this.globalDataService.selectedRegion.value);

      this.newRegion = JSON.parse(JSON.stringify(this.globalDataService.selectedRegion.value));
    }

    this.newRegion.cities = this.newRegion.cities.slice();
  }

  sortData(sort: Sort) {
    const data = this.newRegion.cities.slice();
    if (!sort.active || sort.direction === '') {
      return;
    }

    this.newRegion.cities = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'longitude': return this.compare(a.longitude, b.longitude, isAsc);
        case 'latitude': return this.compare(a.latitude, b.latitude, isAsc);
        default: return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  addCity() {
    if (!this.city.name) {
      this.errorMsg = 'Enter City name';
      return;
    }

    if ((!this.city.longitude || !this.city.latitude)) {
      this.errorMsg = 'Enter Longitude/Latitude';
      return;
    }
    this.newRegion.cities.push(this.city);
    this.city = {
      disabled: false,
      latitude: null,
      longitude: null,
      color: null,
      volume: '',
      name: ''
    };


  }

  deleteCity(city) {
    const index = this.newRegion.cities.findIndex( c => c.name === city.name);
    this.newRegion.cities.splice(index, 1);
  }

  updateRegions() {
    if (!this.newRegion.cities.length) {
      this.errorMsg = 'Add atleast one city';
      return;
    }
    if (!this.newRegion.name) {
      this.errorMsg = 'Enter Region name';
      return;
    }
    if (!this.city.name && !this.newRegion.cities.length) {
      this.errorMsg = 'Enter City name';
      return;
    }

    if ((!this.city.longitude || !this.city.latitude) && !this.newRegion.cities.length) {
      this.errorMsg = 'Enter Longitude/Latitude';
      return;
    }
    if (this.type === Region.CREATE) {
     // this.newRegion.cities.push(this.city);
      const prevRegions = this.globalDataService.regions.value;
      prevRegions.push(this.newRegion);
      console.log(this.newRegion, prevRegions);
    } else {
      let prevRegions = [...this.globalDataService.regions.value];
      prevRegions = prevRegions.map(region => {
        if (region.name === this.globalDataService.selectedRegion.value.name) {
          return this.newRegion;
        } else {
          return region;
        }
      });
      this.globalDataService.regions.next(prevRegions);

    }

    this.globalDataService.selectedRegion.next(this.newRegion);
    this.modalRef.close();
    localStorage.setItem('regions', JSON.stringify(this.globalDataService.regions.value));
  }
}
