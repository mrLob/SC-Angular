import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {


  constructor(private router: Router) {
  }

  username: string;

  password: string;

  showSpinner = false;

  ngOnInit() {

  }

  login(): void {

    if (this.username === 'admin' && this.password === 'admin') {

      this.router.navigate(['user']);

    } else {

      alert('Invalid credentials');

    }

  }
}
