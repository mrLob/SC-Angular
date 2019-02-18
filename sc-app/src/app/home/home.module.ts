import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {IndexComponent} from './index/index.component';
import {AboutComponent} from './about/about.component';
import {MatButtonModule, MatCardModule} from '@angular/material';

@NgModule({
  declarations: [IndexComponent, AboutComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class HomeModule {
}
