import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinListComponent } from './pin-list/pin-list.component';
import { CreatePinComponent } from './create-pin/create-pin.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { NgxSelectModule } from 'ngx-select-ex';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PinListComponent,
    CreatePinComponent,
    CreateCustomerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxSelectModule
  ],
  exports: [PinListComponent]
})
export class PinModule { }
