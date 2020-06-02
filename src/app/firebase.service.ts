import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth} from '@angular/fire/auth';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
userData: Observable<firebase.User>;
  constructor(public db:AngularFirestore, private angularFireAuth: AngularFireAuth) { }
    createUser(value) {
      console.log("creating user...");
      return this .db.collection('users').add({
        name: value.userName,
        dob: value.dob,
        email: value.email,
        role: value.role
      });
    }
    SignUp(email: string, password: string) {
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed up!', res);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });    
      
  }
  }