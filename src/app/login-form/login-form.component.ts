import { Component, OnInit } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  userModel = new User ('', '');
  onSubmit () {
    console.log(this.userModel);
  }
  constructor() { }

  ngOnInit() {
  }
}