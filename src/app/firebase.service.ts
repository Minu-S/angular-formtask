import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db:AngularFirestore) { }
    createUser(value) {
      console.log("creating user..." + value.userName);
      return this .db.collection('users').add({
        name: value.userName,
        dob: value.dob,
        role: value.role,
        email: value.email
      });
    }
  }