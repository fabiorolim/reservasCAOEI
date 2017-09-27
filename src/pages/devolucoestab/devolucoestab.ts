import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the DevolucoestabPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */

@IonicPage()
@Component({
  selector: 'page-devolucoestab',
  templateUrl: 'devolucoestab.html'
})
export class DevolucoestabPage {

  devolucoesRoot = 'DevolucoesPage'
  efetivarDevolucoesRoot = 'EfetivarDevolucoesPage'


  constructor(public navCtrl: NavController) {}

}
