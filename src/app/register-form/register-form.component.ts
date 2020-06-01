import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
 userModel = new User ('', '', '', '');
  onSubmit () {
      value: string = ""; 
   constructor(private _appService: appService) { }  

   ngOnInit(): void { 
      this.value = this._appService.getApp(); 
   } 
  }
  constructor() { }

  ngOnInit() {
  }

}