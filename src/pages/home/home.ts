import { Component } from '@angular/core';
import { NavController, NavParams, DateTime } from 'ionic-angular';
import { User } from '../../providers/auth/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public usuario: User;
  //hoje: Date = new Date("2014-01-01");
  dataInicio: number = Date.parse("2017-09-25T10:12");
  dataFim: number = Date.parse("2017-09-26T12:00");
  dataI1: number = Date.parse("2017-09-26T13:00");
  dataF1: number = Date.parse("2017-09-25");
  reserva: boolean;

  // public data: Date;
  // dia: number
  // mes: number;
  // ano: number;

  constructor(public navCtrl: NavController, public navParms: NavParams) {
    this.usuario = this.navParms.get('usuario');
    // this.dia = this.data.getDate();
    // this.mes = this.data.getMonth();
    // this.ano = this.data.getFullYear();

    // if (this.dataI1 >= this.dataInicio && this.dataI1 <= this.dataFim) {
    //   this.reserva = false;
    // } else {
    //   this.reserva = true;
    // }

    if (this.dataI1 < this.dataInicio || this.dataI1 > this.dataFim) {
      this.reserva = true;
    } else {
      this.reserva = false;
    }
  }
}
