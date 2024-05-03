import { Component } from '@angular/core';
import { PinService } from '../pin.service';
import { IPin } from '../../Iinterfaces';

@Component({
  selector: 'app-pin-list',
  templateUrl: './pin-list.component.html',
  styleUrl: './pin-list.component.scss'
})
export class PinListComponent {

  pinList: IPin[] = [];

  constructor(private pinService: PinService) {
    this.pinService.pinSubject.subscribe((pinList: IPin[]) => {
      this.pinList = pinList;
    });
  }

  addCustomer(): void {

  }

  addPin(): void {

  }

}
