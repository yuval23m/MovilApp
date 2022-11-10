import { FirestoreService } from './../../services/firestore.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Viajes } from 'src/app/interfaces/viajes';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForOf } from '@angular/common';
declare const google;

@Component({
  selector: 'app-componente-uno',
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.scss'],
})
export class ComponenteUnoComponent implements OnInit {

  viajes: Viajes[]=[];

  user = {
    usuario: "",
    password: ""
  };

  constructor(private firestore: FirestoreService, private router : Router  ) {
  }

  ngOnInit() {
    this.obtenerViajes();
  }

  tomarViaje(){
  
  }

  obtenerViajes(){
    this.firestore.obtenerViaje<Viajes>('Viajes').subscribe(res => {
      console.log('prueba de lectura de bd', res);
      this.viajes = res;
    });
  }
}
