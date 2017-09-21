import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { Equipamento } from "../../model/equipamentosModel";
/*
  Generated class for the EquipamentosProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class EquipamentosProvider {

  equipamentos: FirebaseListObservable<Equipamento[]>;

  constructor(private db: AngularFireDatabase) {
    this.getAll();
  }

  public getAll(caracter?: string) {
    if (caracter != '') {
      this.equipamentos = this.db.list("/equipamentos", { query: { orderByChild: 'nome', startAt: caracter } });
    } else {
      this.equipamentos = this.db.list("/equipamentos");
    }
    return this.equipamentos;
  }

  public save(equipamento: Equipamento) {
    console.log("salvando chave" + equipamento.$key);
    if (equipamento.$key) {
      return this.equipamentos.update(equipamento.$key, { nome: equipamento.nome, tombo: equipamento.tombo, ativo: equipamento.ativo });
    } else {
      return this.equipamentos.push({ nome: equipamento.nome, tombo: equipamento.tombo, ativo: equipamento.ativo });
    }
  }

  public delete(equipamento: Equipamento) {
    console.log("Deletando chave " + equipamento.$key);
    return this.equipamentos.remove(equipamento.$key);
  }
}
