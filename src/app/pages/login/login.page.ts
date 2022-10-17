import { AlertaService } from './../../services/alerta.service';
import { FirestoreService } from './../../services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    usuario: "",
    password: ""
  }
  
  field: string = "";
  constructor(private router: Router, public alertController:AlertController,public toastController: ToastController, private firestore: FirestoreService, private api: ApiService, private aler : AlertaService) { }

  ngOnInit() {
  }

  notfound(){
    this.router.navigate(['/ola'])
  }

  validarJson(){
    this.api.getJson().subscribe((data)=>{
      let isUser:boolean;
      data.alumnos.forEach(element => {
        if (element.username===this.user.usuario && element.password===this.user.password && this.validateModel(this.user)){
          let navigationExtras: NavigationExtras = {
            state: {
              user: this.user
            }
          };
          this.router.navigate(['/index'], navigationExtras);
          this.presentToast('Ingresando el sistema..', 2000)
          return isUser=true;
          
        }
      });
      if (!isUser){
        console.log("NO ES USUARIO");
        this.aler.presentAlert('User/Pass incorrectos')
      }
    });
  }


  siguiente2(){
    let navigationExtras: NavigationExtras={
      state:{dato:this.user}
    };
    this.router.navigate(['/forgot-pass'],navigationExtras)
  }
  /**
   * validateModel sirve para validar que se ingrese algo en los
   * campos del html mediante su modelo
   */
  validateModel(model: any) {
    for (var [key, value] of Object.entries(model)) {
      if (value == "") {
        this.field = key;
        return false;
      }
    }
    return true;
  }

  //ALERT PARA CUANDO FALTA UN CAMPO POR INGRESAR
  async presentAlert(title:string) {
    const alert = await this.alertController.create({
      header: title,
      message: "Ingrese: "+this.field+" "+"porfavor.",
      buttons: ['OK'],
    });

    await alert.present();
  }

  //TOAST PARA DAR LA BIENVENIDA
  async presentToast(msg: string, duration?: number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duration ? duration : 2000 //si no viene el parámetro el tiempo es 2000
    });
    toast.present();
  }
}
