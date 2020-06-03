import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  constructor(
   public firebaseService: FirebaseService,
   private router: Router
  ) { }

  ngOnInit(): void {
  }
  userModel = new User ('', '', '', '');
  onSubmit (userData) {
  this.firebaseService.createUser(userData).then (
    res => {
      this.signUp(userData.email, userData.password);
      this.router.navigate(['/login']);
    })
  }
  signUp(email:String, password:String) {
    this.firebaseService.SignUp(email,password);
    email = ''; 
    password = '';
  }
  }
