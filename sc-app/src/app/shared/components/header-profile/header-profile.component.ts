import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../models/user-model';

@Component({
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.scss']
})
export class HeaderProfileComponent implements OnInit {

  @Input() user: UserModel;

  constructor() {
    console.log(this.user);
  }

  ngOnInit() {
    console.log(this.user);
  }

}
