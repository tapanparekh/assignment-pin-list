import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICustomer, IPin, IPinForm } from '../../Iinterfaces';
import { CustomerService } from '../customer.service';
import { PinService } from '../pin.service';
import { ToastrService } from 'ngx-toastr';
import { Observable, ReplaySubject } from 'rxjs';
import { Action, Status } from '../../enums';

@Component({
  selector: 'app-create-pin',
  templateUrl: './create-pin.component.html',
  styleUrl: './create-pin.component.scss'
})
export class CreatePinComponent implements OnInit {

  @ViewChild('closeModel', { read: ElementRef }) closeModel!: ElementRef;

  pin: IPinForm = this.getEmptyForm();
  customerList: ICustomer[] = [];

  constructor(
    private customerService: CustomerService,
    private pinService: PinService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.customerService.customerSubject.subscribe(customerList => this.customerList = customerList);
  }

  onFileSelected(event: any) {
    this.convertFile(event.target.files[0]).subscribe(base64 => {
      this.pin.image = base64;
      console.log(this.pin.image);
    });
  }

  convertFile(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) => result.next(btoa(event.target?.result?.toString() || ''));
    return result;
  }

  setPin(): void {
    let customers = this.customerList.filter(customer => this.pin.collaborators.includes(customer.id));
    let pin: IPin = {
      image: this.pin.image,
      title: this.pin.title,
      privacy: true,
      collaborators: customers
    }
    this.pinService.setPin(pin, Action.add).then((status: Status) => {
      if (status === Status.success) {
        this.closeModel.nativeElement.click();
        this.pin = this.getEmptyForm();
        this.toastr.success('Pin added successfully !');
      }
    });
  }

  getEmptyForm(): IPinForm {
    return {
      collaborators: [],
      image: '',
      privacy: true,
      title: ''
    };
  }
}
