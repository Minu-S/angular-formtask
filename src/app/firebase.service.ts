import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db:AngularFirestore) { }
    createUser(value) {
      console.log("creating user...");
      return this .db.collection('users').add({
        name: value.userName,
        dob: value.dob,
        email: value.email,
        role: value.role
      });
    }
  }