import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {GoogleMap} from '@capacitor/google-maps'
import { environment } from 'src/environments/environment';



//geo
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;

  center : any = {
    lat : -33.4594048,
    lng : -70.6576384
  }

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.createMap()
  }

  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapRef.nativeElement,
      apiKey: environment.google_maps_api_key,
      config: {
        center: this.center,
        zoom: 13,
      },
    });
    
  }
  async mygeo(){
    Geolocation.getCurrentPosition().then(async (resp) => {
      await this.newMap.setCamera({
        coordinate: {
          lat: resp.coords.latitude,
          lng: resp.coords.longitude
        },
        zoom:15,
      });
      await this.newMap.addMarker({
        coordinate: {
          lat: resp.coords.latitude,
          lng: resp.coords.longitude
        }
      });
    });
      
  }
}
