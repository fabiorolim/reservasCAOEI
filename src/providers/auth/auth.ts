import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from "angularfire2/auth";
import { User } from "./user";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private authFirebase: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  createUser(user: User) {
    return this.authFirebase.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  loginEmail(user : User){
    return this.authFirebase.auth.signInWithEmailAndPassword(user.email, user.password);
  }
}
