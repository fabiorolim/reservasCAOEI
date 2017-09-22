import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../providers/auth/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public usuario: User;

  constructor(public navCtrl: NavController, public navParms: NavParams) {
    this.usuario = this.navParms.get('usuario');
  }
}
