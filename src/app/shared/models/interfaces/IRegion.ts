import { ICity } from './ICity';

export interface IRegion {
  name: string;
  cities?: ICity[];
}

