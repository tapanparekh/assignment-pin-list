import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ICountry, ICustomer, ICustomerForm, IRegion } from '../../Iinterfaces';
import { RegionService } from '../region.service';
import { INgxSelectOptions } from 'ngx-select-ex';
import { ToastrService } from 'ngx-toastr';
import { Action, Status } from '../../enums';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.scss'
})
export class CreateCustomerComponent implements OnInit {

  @ViewChild('closeModel', { read: ElementRef }) closeModel!: ElementRef;

  customer: ICustomerForm = this.getEmptyForm();
  regionList: IRegion[] = [];
  countriesList: ICountry[] = [];

  constructor(
    private customerService: CustomerService,
    private regionService: RegionService,
    private toastr: ToastrService
  ) {

  }
  ngOnInit(): void {
    this.regionList = this.regionService.getRegions();
  }

  getCountries(): void {
    this.countriesList = this.regionService.getCountries(this.customer.region);
  }

  setCustomer(): void {
    let customer: ICustomer = {
      id: (Math.floor(Math.random() * 100) + 1).toString(),
      country: this.regionService.getCountry(this.customer.country),
      email: this.customer.email,
      region: this.regionService.getRegion(this.customer.region),
      title: this.customer.title
    }
    this.customerService.setCustomer(customer, Action.add).then((status: Status) => {
      if (status === Status.success) {
        this.closeModel.nativeElement.click();
        this.customer = this.getEmptyForm();
        this.toastr.success('Customer added successfully !');
      }
    });
  }

  getEmptyForm(): ICustomerForm {
    return {
      country: '',
      email: '',
      region: '',
      title: ''
    }
  }
}
