import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from "../../providers/auth/user";
import { NgForm } from "@angular/forms";
import { AuthProvider } from "../../providers/auth/auth";
import { HomePage } from "../home/home";

/**
 * Generated class for the NovoUsuarioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-novo-usuario',
  templateUrl: 'novo-usuario.html',
})
export class NovoUsuarioPage {

  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(public navCtrl: NavController, public toasController: ToastController, private authProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovoUsuarioPage');
  }

  createUser() {
    if (this.form.form.valid) {
      let toast = this.toasController.create({ duration: 3000, position: 'bottom' });

      this.authProvider.createUser(this.user)
        .then((user: any) => {
          user.sendEmailVerification();
          toast.setMessage("Usuário cadastrado com sucesso");

          this.navCtrl.setRoot(HomePage);
        })
        .catch((error: any) => {
          toast.setMessage(error.message);
        })
      toast.present();
    }
  }

}
