import { AlertaService } from './../../services/alerta.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

//mail
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.page.html',
  styleUrls: ['./forgot-pass.page.scss'],
  
})
export class ForgotPassPage {
datoRecu:string
dato:any
field : string = ""

user = {
  usuario : ""
}
  constructor(private router:Router,private alertController: AlertController, private alerta : AlertaService) { }


  public sendEmail(e: Event) {
    if(this.validateModel(this.user)){
      this.alerta.showLoading('Guardando..')
      e.preventDefault();
      emailjs.sendForm('default_service', 'template_pct28kc', e.target as HTMLFormElement, 'Y-J5UorBOdn39hprz')
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
          this.alerta.cerrarLoading();
          this.presentAlert()
        }, (error) => {
          console.log(error.text);
        });
    }else{
      this.alerta.presentAlert('Rellene los campos porfavor')
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'RECUPERACIÓN DE CONTRASEÑA',
      message: 'se envio un correo de recuperacion para el usuario:' + " " + this.user.usuario,
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

  validateModel(model: any) {
    for (var [key, value] of Object.entries(model)) {
      if (value == "") {
        this.field = key;
        return false;
      }
    }
    return true;
  }

}
