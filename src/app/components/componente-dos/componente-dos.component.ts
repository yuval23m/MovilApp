import { AlertaService } from './../../services/alerta.service';
import { Viajes } from './../../interfaces/viajes';
import { FirestoreService } from './../../services/firestore.service';
import { Component, OnInit } from '@angular/core';

import { generateSlug } from "random-word-slugs";
import { EMPTY } from 'rxjs';
import { isEmpty } from '@firebase/util';

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


  constructor(private firestore: FirestoreService, private alerta: AlertaService) { }

  ngOnInit() {}

  

  crearNuevoViaje(){
    this.alerta.showLoading('Guardando..')
    const slug = generateSlug(1, {format: "title"});
    const path = 'Viajes'
    this.firestore.crearViaje(this.viaje, path, slug).then((res)=>{
      console.log('Se agrego correctamente a la base de datos');
      this.alerta.cerrarLoading();
      this.alerta.presentAlert('Viaje guardado con exito!')
    });
  }

}
