import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {IndexComponent} from './index/index.component';
import {AboutComponent} from './about/about.component';
import {MatButtonModule, MatCardModule, MatListModule} from '@angular/material';
import { ContactComponent } from './contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import {AppModule} from '../app.module';

@NgModule({
  declarations: [IndexComponent, AboutComponent, ContactComponent ],
  imports: [
    AppModule,
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    MatCardModule
  ]
})
export class HomeModule {
}
