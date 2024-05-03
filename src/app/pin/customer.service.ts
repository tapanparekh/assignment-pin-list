import { Injectable } from '@angular/core';
import { ICustomer } from '../Iinterfaces';
import { BehaviorSubject } from 'rxjs';
import { Action, Status } from '../enums';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerList: ICustomer[] = [
    {
      id: '1',
      title: 'customer 1',
      country: {
        id: '1',
        name: 'India',
        regionId: '1'
      },
      email: 'customer1@gmail.com',
      region: {
        id: '1',
        name: 'Asia'
      }
    },
    {
      id: '2',
      title: 'customer 2',
      country: {
        id: '11',
        name: 'France',
        regionId: '3'
      },
      email: 'customer2@gmail.com',
      region: {
        id: '1',
        name: 'Asia'
      }
    },
    {
      id: '3',
      title: 'customer 3',
      country: {
        id: '1',
        name: 'India',
        regionId: '1'
      },
      email: 'customer3@gmail.com',
      region: {
        id: '1',
        name: 'Asia'
      }
    },
    {
      id: '4',
      title: 'customer 4',
      country: {
        id: '4',
        name: 'Singapore',
        regionId: '1'
      },
      email: 'customer4@gmail.com',
      region: {
        id: '1',
        name: 'Asia'
      }
    },
  ];
  customerSubject: BehaviorSubject<ICustomer[]> = new BehaviorSubject(this.customerList);

  constructor() { }

  setCustomer(customer: ICustomer, action: Action): Promise<Status> {
    if (action == Action.add) {
      this.customerList.push(customer);
      this.customerSubject.next(this.customerList);
    }
    return Promise.resolve(Status.success);
  }
}