import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservastabPage } from './reservastab';
import { ReservasPage } from '../reservas/reservas';
import { EfetivarPage } from '../efetivar/efetivar';

@NgModule({
  declarations: [
    ReservastabPage,
    ReservasPage,
    EfetivarPage
  ],
  imports: [
    IonicPageModule.forChild(ReservastabPage),
  ]
})
export class ReservastabPageModule {}
