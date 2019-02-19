import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatRippleModule,
  MatSidenavModule, MatListModule
} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderProfileComponent} from './shared/components/header-profile/header-profile.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import {UserModel} from './shared/models/user-model';
import { GoogleMapComponent } from './shared/components/google-map/google-map.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderProfileComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBiM0QuDlvrJFQ84DxyUp0oQl7EMkaC9mI'
    }),
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatRippleModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule

  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule {
}
