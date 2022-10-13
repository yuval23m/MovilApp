import { Router, NavigationExtras } from '@angular/router';
import { AlertaService } from './../../services/alerta.service';
import { Viajes } from './../../interfaces/viajes';
import { FirestoreService } from './../../services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment';

//mapbox
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-componente-dos',
  templateUrl: './componente-dos.component.html',
  styleUrls: ['./componente-dos.component.scss'],
})
export class ComponenteDosComponent {

  viaje = {
    asiento : null,
    destino : "",
    valor : null,
    id : ""
  }



  constructor(private firestore: FirestoreService, private alerta: AlertaService, private router : Router) { 
  }

  verMap(){
    let navigationExtras: NavigationExtras
    this.router.navigate(['/map'],navigationExtras)
  }

  crearNuevoViaje(){
    this.alerta.showLoading('Guardando..')
    const id = this.firestore.crearId();
    const path = 'Viajes'
    this.viaje.id = id
    this.firestore.crearViaje(this.viaje, path, id).then((res)=>{
      console.log('Se agrego correctamente a la base de datos');
      this.alerta.cerrarLoading();
      this.alerta.presentAlert('Viaje guardado con exito!')
    });
  }

}
