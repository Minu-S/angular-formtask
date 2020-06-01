import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
 userModel = new User ('', '', '', '');
  onSubmit () {
    console.log(this.userModel);
  }
  constructor() { }

  ngOnInit() {
  }

}