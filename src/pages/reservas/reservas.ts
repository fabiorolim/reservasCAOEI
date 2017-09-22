import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Reserva } from '../../model/reservasModel';
import { FirebaseListObservable } from 'angularfire2/database';
import { ReservasProvider } from '../../providers/reservas/reservas';

/**
 * Generated class for the ReservasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservas',
  templateUrl: 'reservas.html',
})
export class ReservasPage {

  reservasAbertas: FirebaseListObservable<Reserva[]>;
  reservasCanceladas: FirebaseListObservable<Reserva[]>;
  reservasEfetivadas: FirebaseListObservable<Reserva[]>;
  reserva: Reserva;

  constructor(public navCtrl: NavController, public navParams: NavParams, private reservasProvider: ReservasProvider) {
    this.initializeItems();
    console.log(this.reservasAbertas);
  }

  initializeItems() {
    this.reservasAbertas = this.reservasProvider.getAbertas();
    this.reservasCanceladas = this.reservasProvider.getCanceladas();
    this.reservasEfetivadas = this.reservasProvider.getEfetivadas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservasPage');
  }

  abrirReserva(reserva: Reserva) {

  }

  deletarReserva(reserva: Reserva) {
    this.reservasProvider.deletarReserva(reserva);
  }
}
