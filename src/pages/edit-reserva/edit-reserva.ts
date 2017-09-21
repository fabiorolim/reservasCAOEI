import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReservasProvider } from '../../providers/reservas/reservas';
import { Reserva } from '../../model/reservasModel';

/**
 * Generated class for the EditReservaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-reserva',
  templateUrl: 'edit-reserva.html',
})
export class EditReservaPage {

  reserva: Reserva;
  titulo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public reservasProvider: ReservasProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditReservaPage');
  }

  reservar(){
    return this.reservasProvider.save();
  }
}
