import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db:AngularFirestore, public auth:AngularFireAuthModule) { }
    createUser(value) {
      console.log("creating user...");
      return this .db.collection('users').add({
        name: value.userName,
        dob: value.dob,
        email: value.email,
        role: value.role
      });
    }
    loginUser(value) {
      console.log("user login...");
      return this.auth.
    }
  }