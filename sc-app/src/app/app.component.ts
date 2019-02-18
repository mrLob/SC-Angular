import { Component } from '@angular/core';
import {UserModel} from './shared/models/user-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sc-app';
  public user: UserModel = {firstName: 'Alan', lastName: 'Noman', contacts: '@telegaMoya', role: 'Student'};

}
