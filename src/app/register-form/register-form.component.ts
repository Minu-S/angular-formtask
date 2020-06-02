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
  this.firebaseService.createUser(userData);
  }
}