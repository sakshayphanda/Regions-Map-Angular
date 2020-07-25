import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IRegion } from '../models/interfaces/IRegion';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  regions = new BehaviorSubject<IRegion[]>([
    {
      name: 'NCR',
      cities: [
        {
          name: 'Delhi',
          disabled: false,
          volume: 'Delhi Volume',
          lattitude: '28.610001',
          longitude: '76.8130693'
        },
        {
          name: 'Gurgaon',
          disabled: false,
          volume: 'Gurgaon Volume',
          lattitude: '28.610001',
          longitude: '76.8130693'
        },
        {
          name: 'Noida',
          disabled: false,
          volume: 'Noida Volume',
          lattitude: '28.610001',
          longitude: '76.8130693'
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
          lattitude: '28.610001',
          longitude: '76.8130693'
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
          lattitude: '28.610001',
          longitude: '76.8130693'
        }
      ]
    }
  ]);

  selectedRegion = new BehaviorSubject<IRegion>(    {
    name: 'NCR',
    cities: [
      {
        name: 'Delhi',
        disabled: false,
        volume: 'Delhi Volume',
        lattitude: '28.610001',
        longitude: '76.8130693'
      },
      {
        name: 'Gurgaon',
        disabled: false,
        volume: 'Gurgaon Volume',
        lattitude: '28.610001',
        longitude: '76.8130693'
      },
      {
        name: 'Noida',
        disabled: false,
        volume: 'Noida Volume',
        lattitude: '28.610001',
        longitude: '76.8130693'
      }
    ]
  });
  constructor() { }
}
