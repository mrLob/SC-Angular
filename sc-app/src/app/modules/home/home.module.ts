import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {IndexComponent} from './index/index.component';
import {AboutComponent} from './about/about.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule} from '@angular/material';
import {ContactComponent} from './contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import {PaymentComponent} from './payment/payment.component';
import {LicenseComponent} from './license/license.component';

@NgModule({
  declarations: [IndexComponent, AboutComponent, ContactComponent, PaymentComponent, LicenseComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule
  ]
})
export class HomeModule {

  constructor() {}

}
