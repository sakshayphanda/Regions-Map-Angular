import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IRegion } from '../models/interfaces/IRegion';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  dummy: IRegion[] = [
    {
      name: 'NCR',
      cities: [
        {
          name: 'Delhi',
          disabled: false,
          volume: 'Delhi Volume',
          latitude: 28.610001,
          longitude: 76.8130693,
          color: 'green'
        },
        {
          name: 'Gurgaon',
          disabled: false,
          volume: 'Gurgaon Volume',
          latitude: 28.457523,
          longitude: 77.026344,
          color: 'purple'
        },
        {
          name: 'Noida',
          disabled: false,
          volume: 'Noida Volume',
          latitude: 28.535517,
          longitude: 77.391029,
          color: 'red'
        }
      ]
    },
    {
      name: 'West Bengal',
      cities: [
        {
          name: 'kolkata',
          disabled: false,
          volume: ' volume',
          latitude: 22.572645,
          longitude: 88.363892
        }
      ]
    }
  ];

  data: IRegion[] = localStorage.getItem('regions') ? JSON.parse(localStorage.getItem('regions')): [];
  regions = new BehaviorSubject<IRegion[]>(this.data);
  modalClose = new BehaviorSubject<boolean>(false);
  selectedRegion = new BehaviorSubject<IRegion>({
    name: '',
    cities: []
  });
  constructor() { }
}
