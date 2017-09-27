import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Reserva } from '../../model/reservasModel';
import { DevolucoesProvider } from '../../providers/devolucoes/devolucoes';

/**
 * Generated class for the DevolverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-devolver',
  templateUrl: 'devolver.html',
})
export class DevolverPage {
  
  reserva: Reserva;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private devolucoesProvider: DevolucoesProvider) {
    this.reserva = this.navParams.get('reserva');  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevolverPage');
  }

  public devolver(){
    this.devolucoesProvider.devolver(this.reserva);
  }
}
