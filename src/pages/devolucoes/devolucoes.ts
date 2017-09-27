import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Devolucao } from '../../model/devolucaoModel';

/**
 * Generated class for the DevolucoesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-devolucoes',
  templateUrl: 'devolucoes.html',
})
export class DevolucoesPage {

  devolucao: Devolucao

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.devolucao = new Devolucao();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevolucoesPage');
  }

}
