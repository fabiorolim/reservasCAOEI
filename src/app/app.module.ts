import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { NovoUsuarioPage } from "../pages/novo-usuario/novo-usuario";
import { EquipamentosPage } from "../pages/equipamentos/equipamentos";
import { EquipamentosProvider } from '../providers/equipamentos/equipamentos';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { EditEquipamentosPage } from "../pages/edit-equipamentos/edit-equipamentos";
import { DetalhesPage } from '../pages/detalhes/detalhes';
import { ReservasProvider } from '../providers/reservas/reservas';
import { EditReservaPage } from '../pages/edit-reserva/edit-reserva';
import { DevolucoesPage } from '../pages/devolucoes/devolucoes';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';
import { ReservasPage } from '../pages/reservas/reservas';
import { EfetivarPage } from '../pages/efetivar/efetivar';
import { ReservastabPage } from '../pages/reservastab/reservastab';
import { DevolucoestabPage } from '../pages/devolucoestab/devolucoestab';
import { DevolucoesProvider } from '../providers/devolucoes/devolucoes';
import { DevolverPage } from '../pages/devolver/devolver';


const firebaseConfig = {
  apiKey: "AIzaSyBsLCPusCRHe3dLid5c1g9V79t6uCmlnmg",
  authDomain: "reservaifpioeiras.firebaseapp.com",
  databaseURL: "https://reservaifpioeiras.firebaseio.com",
  projectId: "reservaifpioeiras",
  storageBucket: "reservaifpioeiras.appspot.com",
  messagingSenderId: "1004870956440"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    NovoUsuarioPage,
    EquipamentosPage,
    EditEquipamentosPage,
    DetalhesPage,
    EditReservaPage,
    ReservastabPage, 
    DevolucoestabPage,
    DevolverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    NovoUsuarioPage,
    EquipamentosPage,
    EditEquipamentosPage,
    DetalhesPage,
    EditReservaPage,
    ReservastabPage,
    DevolucoestabPage,
    DevolverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    EquipamentosProvider,
    ReservasProvider,
    DevolucoesProvider
  ]
})
export class AppModule { }
