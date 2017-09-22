import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Reserva } from '../../model/reservasModel';

/*
  Generated class for the ReservasProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ReservasProvider {

  reservas: FirebaseListObservable<Reserva[]>;
  reservasEfetivas: FirebaseListObservable<Reserva[]>;

  constructor(private db: AngularFireDatabase) {
  }

  save(reserva: Reserva) {
    return this.reservas.push({
      dataInicio: reserva.dataInicio, horaInicio: reserva.horaInicio,
      dataFim: reserva.dataFim, horaFim: reserva.horaFim, motivo: reserva.motivo, fora: reserva.utilizarFora, status: 'aberta',
      equipamento: reserva.equipamento.$key
    });
  }

  public getAbertas() {
    this.reservas = this.db.list("/reservas", { query: { orderByChild: 'status', equalTo: 'aberta' } });
    return this.reservas;
  }

  public getEfetivadas() {
    this.reservasEfetivas = this.db.list("/reservas", { query: { orderByChild: 'status', equalTo: 'efetiva' } });
    return this.reservasEfetivas;
  }

  public getCanceladas() {
    this.reservas = this.db.list("/reservas", { query: { orderByChild: 'status', equalTo: 'cancelada' } });
    return this.reservas;
  }

  public deletarReserva(reserva: Reserva) {
    return this.reservas.remove(reserva.$key);
  }
}
