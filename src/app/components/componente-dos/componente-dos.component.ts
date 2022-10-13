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
export class ComponenteDosComponent implements OnInit {

  viaje = {
    asiento : null,
    destino : "",
    valor : null,
    id : ""
  }

  loca = []=[];

  public map: mapboxgl.Map;
  public style = 'mapbox://styles/mapbox/streets-v11'


  constructor(private firestore: FirestoreService, private alerta: AlertaService) { 
    mapboxgl.accessToken = environment.MAPBOX_KEY
  }

  ngOnInit() {
    console.log(this.loca);
    
  }

  ionViewWillEnter(){
   this.constrMap();
  }

  

  constrMap(){
    this.map = new mapboxgl.Map({
      container: 'mapa-box',
      style: this.style,
      zoom: 14,
      center: [
        -71.53316324636769,
        -33.03387009443383
      ]

    });
    
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
