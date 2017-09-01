import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EquipamentosProvider } from "../../providers/equipamentos/equipamentos";
import { FirebaseListObservable } from "angularfire2/database";
import { EditEquipamentosPage } from "../edit-equipamentos/edit-equipamentos";
import { Equipamento } from "../../model/equipamentosModel";

/**
 * Generated class for the EquipamentosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipamentos',
  templateUrl: 'equipamentos.html',
})
export class EquipamentosPage {

  equipamentos: FirebaseListObservable<Equipamento[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private equipamentosProvider: EquipamentosProvider) {
    this.initializeItems();
  }

  initializeItems() {
    this.equipamentos = this.equipamentosProvider.getAll();
    console.log(this.equipamentos);
  }

  search(event) {
    let val = event.target.value;
    if (val && val.trim() != '') {
      this.equipamentos = this.equipamentosProvider.getAll(val);
    } else {
      this.initializeItems();
    }
  }

  public novoEquipamento() {
    return this.navCtrl.push(EditEquipamentosPage);
  }

  public editEquipamento(equipamento: any) {
    return this.navCtrl.push(EditEquipamentosPage, { equipamento: equipamento });
  }

  public deleteEquipamento(equipamento: any) {
    this.equipamentosProvider.delete(equipamento);
  }
}
