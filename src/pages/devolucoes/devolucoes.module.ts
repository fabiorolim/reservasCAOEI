import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevolucoesPage } from './devolucoes';

@NgModule({
  declarations: [
    DevolucoesPage,
  ],
  imports: [
    IonicPageModule.forChild(DevolucoesPage),
  ],
})
export class DevolucoesPageModule {}
