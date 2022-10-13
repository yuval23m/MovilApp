import { FirestoreService } from './../../services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { Viajes } from 'src/app/interfaces/viajes';


@Component({
  selector: 'app-componente-uno',
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.scss'],
})
export class ComponenteUnoComponent implements OnInit {

  viajes: Viajes[]=[];

  constructor(private firestore: FirestoreService) { 
  }

  ngOnInit() {
    this.obtenerViajes();
    console.log(this.viajes)
  }


  obtenerViajes(){
    this.firestore.obtenerViaje<Viajes>('Viajes').subscribe(res => {
      console.log('prueba de lectura de bd', res);
      this.viajes = res;
      console.log(this.viajes);
      
      
    });
  }
}
