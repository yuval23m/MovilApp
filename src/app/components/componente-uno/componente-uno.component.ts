import { FirestoreService } from './../../services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { Viajes } from 'src/app/interfaces/viajes';
import { Router } from '@angular/router';


@Component({
  selector: 'app-componente-uno',
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.scss'],
})
export class ComponenteUnoComponent implements OnInit {

  viajes: Viajes[]=[];

  constructor(private firestore: FirestoreService, private router : Router) { 
  }

  ngOnInit() {
    this.obtenerViajes();
  }

  verRuta(){
    this.router.navigate(['/map'])
  }

  obtenerViajes(){
    this.firestore.obtenerViaje<Viajes>('Viajes').subscribe(res => {
      console.log('prueba de lectura de bd', res);
      this.viajes = res;
    });
  }
}
