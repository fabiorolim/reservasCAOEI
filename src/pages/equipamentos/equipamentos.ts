import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EquipamentosProvider } from "../../providers/equipamentos/equipamentos";
import { FirebaseListObservable } from "angularfire2/database";
import { EditEquipamentosPage } from "../edit-equipamentos/edit-equipamentos";
import { Equipamento } from "../../model/equipamentosModel";
import { DetalhesPage } from '../detalhes/detalhes';

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
    private equipamentosProvider: EquipamentosProvider, public loading: LoadingController) {
    this.initializeItems();
  }

  //Invoca o provider para carregar na lista de equipamentos todos os equipamentos
  initializeItems() {
    //Ajustar aqui o progresso para finalizar logo após carregar a lista
    let load = this.loading.create({content: 'Aguarde...', duration: 3000});
    this.equipamentos = this.equipamentosProvider.getAll();
    load.present();
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

  //Abre a tela de edição de equipamento vazia
  public novoEquipamento() {
    return this.navCtrl.push(EditEquipamentosPage);
  }

  //Abre a tela de edição do equipamento já com seus dados
  public editEquipamento(equipamento: Equipamento) {
    return this.navCtrl.push(EditEquipamentosPage, { equipamento: equipamento });
  }

  //Invoca o provider para deletar um equipamento
  public deleteEquipamento(equipamento: Equipamento) {
    this.equipamentosProvider.delete(equipamento);
  }

  //Abre a página de detalhes de cada produto com botão de reserva
  public abrir(equipamento: Equipamento) {
    return this.navCtrl.push(DetalhesPage, { equipamento: equipamento })
  }
}
