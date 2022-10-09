import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  loading : any;

  constructor(private alertController: AlertController, public loadingController: LoadingController) { }

  async presentAlert(mensaje:string) {
    const alert = await this.alertController.create({
      header: 'INFO',
      message: mensaje,
      buttons: ['Salir'],
    });

    await alert.present();
  }

  async showLoading(mensaje: string) {
    this.loading = await this.loadingController.create({
      message: mensaje,
      duration: 3000,
      spinner: 'circles',
    });

    await this.loading.present();
  }

  async cerrarLoading() {
    await this.loading.dismiss();
  }
}
