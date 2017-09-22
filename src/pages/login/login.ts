import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { NovoUsuarioPage } from "../novo-usuario/novo-usuario";
import { AuthProvider } from "../../providers/auth/auth";
import { User } from "../../providers/auth/user";
import { NgForm } from "@angular/forms";
import { HomePage } from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController,
    private toastController: ToastController,
    public navParams: NavParams,
    private fireAuth: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  novoUsuario() {
    this.navCtrl.push(NovoUsuarioPage);
  }

  login() {
    if (this.form.form.valid) {
      this.fireAuth.loginEmail(this.user)
        .then(() => {
          this.navCtrl.setRoot(HomePage, {usuario: this.user});
        })
        .catch((error: any) => {
          let toast = this.toastController.create({ duration: 3000, position: 'bottom' });
          toast.setMessage(error.message);
          toast.present();
        });
    }
  }
}
