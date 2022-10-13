import { Component, OnInit } from '@angular/core';

//mapbox
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  public map: mapboxgl.Map;
  public style = 'mapbox://styles/mapbox/streets-v11'

  constructor() { 
    mapboxgl.accessToken = environment.MAPBOX_KEY
  }

  ngOnInit() {
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
}
