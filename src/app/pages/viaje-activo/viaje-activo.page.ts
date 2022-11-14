import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viaje-activo',
  templateUrl: './viaje-activo.page.html',
  styleUrls: ['./viaje-activo.page.scss'],
})
export class ViajeActivoPage implements OnInit {

    //lottie
    options: AnimationOptions = {
      path: "/assets/map.json"
    }

  constructor(private router : Router) { }

      //lottie
      animationCreated(animationItem: AnimationItem):void{
        console.log('animacion cargada exitosamente');
      }

      llego(){
        localStorage.removeItem('activo')
        this.router.navigate(['index/uno'])
      }

  ngOnInit() {
  }

}
