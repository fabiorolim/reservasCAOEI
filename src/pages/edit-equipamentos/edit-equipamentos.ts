import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EquipamentosProvider } from "../../providers/equipamentos/equipamentos";
import { Equipamento } from "../../model/equipamentosModel";
import { NgForm } from "@angular/forms/";

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

  
  @ViewChild('form') form: NgForm;
  
  public equipamento: Equipamento;
  nomeEquipamento: string;
  tomboEquipamento: string;
  keyEquipamento: string;
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
    this.equipamento = { $key: this.keyEquipamento, ativo: this.ativoEquipamento, nome: this.nomeEquipamento, tombo: this.tomboEquipamento };
    //this.provider.save({ nome: this.nomeEquipamento, tombo: this.tomboEquipamento, key: this.keyEquipamento, ativo: this.ativoEquipamento });
    this.provider.save(this.equipamento);
    console.log(this.nomeEquipamento, this.tomboEquipamento, this.keyEquipamento);
    this.navCtrl.pop();
  }
}
