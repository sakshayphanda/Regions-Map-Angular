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
          lattitude: 28.610001,
          longitude: 76.8130693,
          color: 'green'
        },
        {
          name: 'Gurgaon',
          disabled: false,
          volume: 'Gurgaon Volume',
          lattitude: 28.457523,
          longitude: 77.026344,
          color: 'purple'
        },
        {
          name: 'Noida',
          disabled: false,
          volume: 'Noida Volume',
          lattitude: 28.535517,
          longitude: 77.391029,
          color: 'red'
        }
      ]
    },
    {
      name: 'Kolkata',
      cities: [
        {
          name: 'abc',
          disabled: false,
          volume: 'Delhi volume',
          lattitude: 28.610001,
          longitude: 76.8130693
        }
      ]
    },
    {
      name: 'Mumbai',
      cities: [
        {
          name: 'Delhi',
          disabled: false,
          volume: 'Delhi volume',
          lattitude: 28.610001,
          longitude: 76.8130693
        }
      ]
    }
  ];
  regions = new BehaviorSubject<IRegion[]>(this.dummy);

  selectedRegion = new BehaviorSubject<IRegion>(this.dummy[0]);
  constructor() { }
}
