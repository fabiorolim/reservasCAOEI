import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EquipamentosProvider } from "../../providers/equipamentos/equipamentos";
import { Equipamento } from "../../model/equipamentosModel";

/**
 * Generated class for the EditEquipamentosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-equipamentos',
  templateUrl: 'edit-equipamentos.html',
})
export class EditEquipamentosPage {

  nomeEquipamento: string;
  tomboEquipamento: string;
  keyEquipamento: string;
  equipamento: Equipamento;
  ativoEquipamento: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: EquipamentosProvider) {
    
    //console.log(this.navParams.data.equipamento);

    if (this.navParams.data.equipamento) {
      this.nomeEquipamento = this.navParams.data.equipamento.nome;
      this.tomboEquipamento = this.navParams.data.equipamento.tombo;
      this.keyEquipamento = this.navParams.data.equipamento.$key;
      this.ativoEquipamento = this.navParams.data.equipamento.ativo;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditEquipamentosPage');
  }

  save() {
    this.provider.save({ nome: this.nomeEquipamento, tombo: this.tomboEquipamento, key: this.keyEquipamento, ativo: this.ativoEquipamento });
    console.log(this.nomeEquipamento, this.tomboEquipamento, this.keyEquipamento);
    this.navCtrl.pop();
  }
}
