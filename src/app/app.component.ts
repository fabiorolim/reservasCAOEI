import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { EquipamentosPage } from "../pages/equipamentos/equipamentos";
import { ReservasPage } from '../pages/reservas/reservas';
import { ReservastabPage } from '../pages/reservastab/reservastab';
import { DevolucoestabPage } from '../pages/devolucoestab/devolucoestab';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;
  pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.pages = [{ title: 'Login', component: LoginPage },
      { title: 'Equipamentos', component: EquipamentosPage },
      { title: 'Reservas', component: ReservastabPage },
      { title: 'Devoluções', component: DevolucoestabPage }];

    });
  }

  openPage(page: any) {
    this.nav.setRoot(page.component);
  }
}

