import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Devolucao } from '../../model/devolucaoModel';
import { DevolucoesProvider } from '../../providers/devolucoes/devolucoes';
import { FirebaseListObservable } from 'angularfire2/database';

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

  devolucao: Devolucao;
  devolucoesAbertas: FirebaseListObservable<Devolucao[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private devolucoesProvider: DevolucoesProvider) {
    this.devolucao = new Devolucao();
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevolucoesPage');
  }

  listarAbertas() {
    this.devolucoesAbertas = this.devolucoesProvider.getAbertas();
  }

  initializeItems(){
    this.listarAbertas();
  }

}
