import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Devolucao } from '../../model/devolucaoModel';
import { AngularFireAuth } from 'angularfire2/auth';
import { Reserva } from '../../model/reservasModel';

/*
  Generated class for the DevolucoesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DevolucoesProvider {

  private devolucoes: FirebaseListObservable<Devolucao[]>;
  private uid: string;

  constructor(private db: AngularFireDatabase, private fireAuth: AngularFireAuth) {
    this.uid = this.fireAuth.auth.currentUser.uid;
    console.log('Hello DevolucoesProvider Provider');
  }

  devolver(reserva: Reserva) {
    this.devolucoes = this.db.list('/devolucoes/' + this.uid);
    return this.devolucoes.push({
      reserva: reserva,
      status: 'aberta'
    }).then(_ => console.log("Devolução efetuada"))
      .catch(err => console.log(err, "Erro ao tentar efetuar devolução"));
  }
}
