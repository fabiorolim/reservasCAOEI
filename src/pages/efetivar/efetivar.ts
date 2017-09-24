import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservasProvider } from '../../providers/reservas/reservas';
import { Reserva } from '../../model/reservasModel';

/**
 * Generated class for the EfetivarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-efetivar',
  templateUrl: 'efetivar.html',
})
export class EfetivarPage {

  reserva: Reserva;

  constructor(public navCtrl: NavController, public navParams: NavParams, private reservasProvider: ReservasProvider) {
    this.reserva = new Reserva();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EfetivarPage');
  }

  efetivarReserva(reserva: Reserva) {
    this.reservasProvider.efetivar(reserva);
  }
}
