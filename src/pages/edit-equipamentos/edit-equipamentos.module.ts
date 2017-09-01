import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditEquipamentosPage } from './edit-equipamentos';

@NgModule({
  declarations: [
    EditEquipamentosPage,
  ],
  imports: [
    IonicPageModule.forChild(EditEquipamentosPage),
  ],
})
export class EditEquipamentosPageModule {}
