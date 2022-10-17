import { Router } from '@angular/router';
import { FirestoreService } from './../../services/firestore.service';
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
  public marker : mapboxgl.Marker

  constructor(private fire : FirestoreService, private route : Router) { 
    mapboxgl.accessToken = environment.MAPBOX_KEY
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
   this.constrMap();
  }

  viajar(){
    this.route.navigate(['/index/uno'])
  }

  constrMap(){
    this.map = new mapboxgl.Map({
      container: 'mapa-box',
      style: this.style,
      zoom: 14,
      center: this.fire.locations[0],
    });
  }
}
