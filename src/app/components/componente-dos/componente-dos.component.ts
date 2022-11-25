import { Router } from '@angular/router';
import { AlertaService } from './../../services/alerta.service';
import { FirestoreService } from './../../services/firestore.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { Geolocation } from '@capacitor/geolocation';

declare const google;

@Component({
  selector: 'app-componente-dos',
  templateUrl: './componente-dos.component.html',
  styleUrls: ['./componente-dos.component.scss'],
})
export class ComponenteDosComponent implements AfterViewInit{


  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  ///
  viaje = {
    asiento : null,
    desde : "",
    destino : "",
    valor : null,
    patente : "",
    id : ""
  }

  coords = {
    lat : null,
    lng : null
  }

  field = "";

  @ViewChild('mapElement', {static:false} ) mapElement; 

  constructor(private firestore : FirestoreService, private alerta : AlertaService, private router : Router) { }


  ngAfterViewInit(): void {
    this.loadMapDirections()
  }

  loadMapDirections(){
    const map = new google.maps.Map(this.mapElement.nativeElement,
      {
        zoom: 18    ,
        center: { lat: -33.0335543, lng: -71.534139 },
      }
    );
    const myLatLng = { lat: -33.0335543, lng: -71.534139 };
    const marker = new google.maps.Marker({
      position : myLatLng,
      tiitle : 'Aqui estoy'
    });
    marker.setMap(map)
    this.directionsRenderer.setMap(map);
  }

  calculateAndDisplayRoute() {
    this.directionsService
      .route({
        origin: {
          query: this.viaje.desde,
        },
        destination: {
          query: this.viaje.destino,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      })
      .then((response) => {
        this.directionsRenderer.setDirections(response);
      })
      .catch((e) => window.alert("Directions request failed due to " + status));
  }

  crearNuevoViaje(){
    const id = this.firestore.crearId();
    const path = 'Viajes'
    this.viaje.id = id
    if(this.validateModel(this.viaje)){
      if(this.viaje.valor <= 3500){
        this.alerta.showLoading('Guardando..')
        this.firestore.crearViaje(this.viaje, path, id).then((res)=>{
          console.log('Se agrego correctamente a la base de datos');
          this.alerta.cerrarLoading();
          this.alerta.presentAlert('Viaje guardado con exito!')
          this.router.navigate(['index/uno'])
        });
      }else{
        this.alerta.presentAlert('Valor maximo de $3500 permitido')
      }
    }else{
      this.alerta.presentAlert('Rellene los campos porfavor')
    }
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
