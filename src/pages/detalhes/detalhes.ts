import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Equipamento } from '../../model/equipamentosModel';
import { ReservasProvider } from '../../providers/reservas/reservas';
import { EditReservaPage } from '../edit-reserva/edit-reserva';

/**
 * Generated class for the DetalhesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {
  
  equipamento: Equipamento;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public reservasProvider: ReservasProvider) {
    this.equipamento = this.navParams.get('equipamento');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
    console.log(this.equipamento.nome);

  }

  public reservar() {
    this.navCtrl.push(EditReservaPage);
    //return this.reservasProvider.save();
  }

}
