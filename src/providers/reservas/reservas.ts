import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Reserva } from '../../model/reservasModel';
import { AngularFireAuth } from "angularfire2/auth";

/*
  Generated class for the ReservasProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ReservasProvider {

  reservas: FirebaseListObservable<Reserva[]>;
  //reservasEfetivas: FirebaseListObservable<Reserva[]>;
  private uid: string;

  constructor(private db: AngularFireDatabase, private angularFireAuth: AngularFireAuth) {
    // let database = db.database.app;
    // console.log("Database" + database.name);
    this.uid = this.angularFireAuth.auth.currentUser.uid;
    console.log(this.uid);
  }

  save(reserva: Reserva) {
    this.reservas = this.db.list('/reservas/'+this.uid);
    return this.reservas.push(
      {
        dataInicio: reserva.dataInicio,
        horaInicio: reserva.horaInicio,
        dataFim: reserva.dataFim,
        horaFim: reserva.horaFim,
        motivo: reserva.motivo,
        fora: reserva.utilizarFora,
        status: 'aberta',
        equipamento: reserva.equipamento.$key
      }
      //reserva
    );
  }

  public getAbertas() {
    this.reservas = this.db.list("/reservas/"+this.uid, { query: { orderByChild: 'status', equalTo: 'aberta' } });
    return this.reservas;
  }

  public getEfetivadas() {
    this.reservas = this.db.list("/reservas/"+this.uid, { query: { orderByChild: 'status', equalTo: 'efetivada' } });
    return this.reservas;
  }

  public getCanceladas() {
    this.reservas = this.db.list("/reservas/"+this.uid, { query: { orderByChild: 'status', equalTo: 'cancelada' } });
    return this.reservas;
  }

  public deletarReserva(reserva: Reserva) {
    return this.reservas.remove(reserva.$key);
  }

  public efetivar(reserva: Reserva){
    return this.reservas.update(reserva.$key, {status: "efetivada"})
  }

  public buscarReserva() {
    return this.db.database.ref('reservas/').child('teste');
  }
}
