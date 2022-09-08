import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.page.html',
  styleUrls: ['./forgot-pass.page.scss'],
  
})
export class ForgotPassPage {
datoRecu:string
dato:any
  constructor(private router:Router,private alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'info',
      subHeader: 'Recuperacion de contraseña',
      message: 'se envio un correo de recuperacion para el usuario:' + " " + this.datoRecu,
      buttons: ['OK'],
    });

    await alert.present();
  }


  siguiente3(){
    let navigationExtras: NavigationExtras={
      state:{dato:this.dato}
    };
    this.router.navigate(['/login'],navigationExtras)
  }


}
