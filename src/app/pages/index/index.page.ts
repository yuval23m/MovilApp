import { StorageService } from './../../services/storage.service';
import { Storage } from '@ionic/storage-angular';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, AnimationController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  @ViewChild('car', { read: ElementRef, static: true }) car: ElementRef;
  @ViewChild('person', { read: ElementRef, static: true }) person: ElementRef;
  user = {
    usuario: "",
    password: ""
  }

  constructor(private activeroute: ActivatedRoute, private router: Router, public alertController:AlertController, private animationCtrl: AnimationController,
              private storage : StorageService) {
    this.activeroute.queryParams.subscribe(params => { 
      if (this.router.getCurrentNavigation().extras.state) { 
        this.user = this.router.getCurrentNavigation().extras.state.user;
        this.router.navigate(['index/uno']);
      }else{this.router.navigate(["index"])}
    });
  }
  
  
  segmentChanged($event){
    let direccion=$event.detail.value;
    console.log(direccion);
    this.router.navigate(['index/'+direccion]);
  }

//ANIMACION AL SELECCIONAR EL AUTO EN EL SEGMENTO QUE SE PONGA GRIS
  an1(){
    const car = this.animationCtrl.create()
   .addElement(this.car.nativeElement)
   .duration(1500)
   .iterations(1)
   .direction('alternate')
   .fromTo('background', 'black', 'var(--background)');
   car.play()
  }
//ANIMACION AL SELECCIONAR LA PERSONITA EN EL SEGMENTO QUE SE PONGA GRIS
  an2(){
    const person = this.animationCtrl.create()
   .addElement(this.person.nativeElement)
   .duration(1500)
   .iterations(1)
   .direction('alternate')
   .fromTo('background', 'black', 'var(--background)');
   person.play()
  }

  ngOnInit() {
  }

  salir(){
    this.router.navigate(['login'])
    this.storage.delete('auth');
    
  }
}
