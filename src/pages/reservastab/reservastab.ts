import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the ReservastabPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */

@IonicPage()
@Component({
  selector: 'page-reservastab',
  templateUrl: 'reservastab.html'
})
export class ReservastabPage {

  reservasRoot = 'ReservasPage'
  efetivarRoot = 'EfetivarPage'


  constructor(public navCtrl: NavController) {}

}
