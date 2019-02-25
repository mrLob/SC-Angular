import { Component } from '@angular/core';
import {UserModel} from './shared/models/user-model';
import {Observable} from 'rxjs';
import {BreakpointObserver, BreakpointState, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sc-app';

  public isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  public user: UserModel = {firstName: 'Alan', lastName: 'Noman', contacts: '@telegaMoya', role: 'Student'};
  constructor(private breakpointObserver: BreakpointObserver) {}
}
