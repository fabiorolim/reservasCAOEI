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

  constructor(private db: AngularFireDatabase){
    this.reservas = this.db.list("/reservas");
  }

  save(){
    return this.reservas.push({dataInicio: '01-01-2017'});
  }

  public getAll(){
    return this.reservas;
  }
}
