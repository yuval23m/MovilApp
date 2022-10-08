import { Viajes } from './../../interfaces/viajes';
import { FirestoreService } from './../../services/firestore.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-dos',
  templateUrl: './componente-dos.component.html',
  styleUrls: ['./componente-dos.component.scss'],
})
export class ComponenteDosComponent implements OnInit {

  viaje = {
    asiento : 0,
    destino : "",
    valor : 0
  }

  constructor(private firestore: FirestoreService) { }

  ngOnInit() {}


  crearNuevoViaje(){
    const path = 'Viajes'
    this.firestore.crearViaje(this.viaje, path, 'SIFUNCIONA').then((res)=>{
      console.log('Se agrego correctamente', res);
    });
  }
}
