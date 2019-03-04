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
import {FormsModule} from '@angular/forms';
import {AuthGuard} from '@app/guards/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    HeaderProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
