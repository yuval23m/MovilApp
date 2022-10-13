import { AlertaService } from './services/alerta.service';
import { Component } from '@angular/core';


//GEOLOCALIZACION
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private geolocation: Geolocation, private alerta : AlertaService, private platform : Platform) {
    this.platform.ready().then(async ()=>{
      this.obtenerUbi();
    });
  }
  obtenerUbi(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log('ubi ', resp);
      
     }).catch((error) => {
       this.alerta.presentAlert(error);
       
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }
}
