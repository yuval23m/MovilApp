import { AlertaService } from './../../services/alerta.service';
import { FirestoreService } from './../../services/firestore.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Viajes } from 'src/app/interfaces/viajes';
import { ActivatedRoute, Router } from '@angular/router';

//mail
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

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

  constructor(private firestore: FirestoreService, private router : Router, private alerta : AlertaService) {
  }

  ngOnInit() {
    this.obtenerViajes();
  }

  public correoViaje(e: Event) {
    e.preventDefault();
    this.alerta.showLoading('Guardando..')
    emailjs.send('default_service', 'template_r9qpztx', e.target as HTMLFormElement, 'Y-J5UorBOdn39hprz')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.alerta.cerrarLoading();
        
      }, (error) => {
        console.log(error.text);
      });
  }

  obtenerViajes(){
    this.firestore.obtenerViaje<Viajes>('Viajes').subscribe(res => {
      console.log('prueba de lectura de bd', res);
      this.viajes = res;
    });
  }
}
