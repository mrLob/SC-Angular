import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  username: string;
  lastName: string;
  firstName: string;
  email: string;

  showSpinner = false;

  password: string;

  constructor(private router: Router) {
  }
  ngOnInit() {
  }


  register(): void {

    if (this.username === 'admin' && this.password === 'admin') {

      this.router.navigate(['user']);

    } else {

      alert('Invalid credentials');

    }

  }
}
