import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountry, IRegion } from '../Iinterfaces';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  regionList: IRegion[] = [
    {
      id: '1',
      name: 'Asia'
    }, {
      id: '2',
      name: 'Africa'
    }, {
      id: '3',
      name: 'Europe'
    }, {
      id: '4',
      name: 'North America'
    }, {
      id: '5',
      name: 'South America'
    }, {
      id: '6',
      name: 'Antarctica'
    }, {
      id: '7',
      name: 'Australia'
    }
  ];

  countryList: ICountry[] = [
    {
      id: '1',
      name: 'India',
      regionId: '1'
    }, {
      id: '2',
      name: 'Japan',
      regionId: '1'
    }, {
      id: '3',
      name: 'Chine',
      regionId: '1'
    }, {
      id: '4',
      name: 'Singapore',
      regionId: '1'
    }, {
      id: '5',
      name: 'Malaysia',
      regionId: '1'
    }, {
      id: '6',
      name: 'Ethiopia',
      regionId: '2'
    }, {
      id: '7',
      name: 'Sudan',
      regionId: '2'
    }, {
      id: '8',
      name: 'Tanzania',
      regionId: '2'
    }, {
      id: '9',
      name: 'DR Congo',
      regionId: '2'
    }, {
      id: '10',
      name: 'Kenya',
      regionId: '2'
    }, {
      id: '11',
      name: 'France',
      regionId: '3'
    }, {
      id: '12',
      name: 'Germany',
      regionId: '3'
    }, {
      id: '13',
      name: 'Spain',
      regionId: '3'
    }, {
      id: '14',
      name: 'Sweden',
      regionId: '3'
    }, {
      id: '15',
      name: 'Netherlands',
      regionId: '3'
    }, {
      id: '16',
      name: 'Canada',
      regionId: '4'
    }, {
      id: '17',
      name: 'Mexico',
      regionId: '4'
    }, {
      id: '18',
      name: 'Costa Rica',
      regionId: '4'
    }, {
      id: '19',
      name: 'United States',
      regionId: '4'
    }, {
      id: '20',
      name: 'Cuba',
      regionId: '4'
    }
  ];

  constructor() { }

  getRegions(): IRegion[] {
    return this.regionList;
  }

  getCountries(regionId: string): ICountry[] {
    return this.countryList.filter(country => country.regionId === regionId);
  }

  getCountry(id: string): ICountry {
    return this.countryList.filter(country => country.id === id)[0];
  }

  getRegion(id: string): IRegion {
    return this.regionList.filter(region => region.id === id)[0];
  }

}


