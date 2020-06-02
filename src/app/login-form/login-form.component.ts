import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  constructor(public firebaseService: FirebaseService,
   private router: Router
  ) { }

  ngOnInit(): void {
  }
    userModel = new User ('', '');

  onSubmit (userData) {
    this.firebaseService.SignUp(userData.email, userData.password);
    userData.email = ''; 
    userData.password = '';
  }
  }
