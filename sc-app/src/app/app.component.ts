import {Component, OnInit} from '@angular/core';
import {UserModel} from './shared/models/user-model';
import {Observable} from 'rxjs';
import {BreakpointObserver, BreakpointState, Breakpoints} from '@angular/cdk/layout';
import {NavigationService} from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sc-app';

  public isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  public user: UserModel = {firstName: 'Alan', lastName: 'Noman', contacts: '@telegaMoya', role: 'Student'};

  links = new Array<{ text: string, path: string, icon: string }>();

  constructor(private breakpointObserver: BreakpointObserver, private navigation: NavigationService) {}

  ngOnInit(): void {
    this.links = this.navigation.getLinks();
  }
}
