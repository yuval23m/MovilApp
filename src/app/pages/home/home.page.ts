import { Component, OnInit, NgZone } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage{
  dato:string;
  @ViewChild('boton', { read: ElementRef, static: true }) boton: ElementRef;

  //lottie
  options: AnimationOptions = {
    path: "/assets/1.json"
  }

  constructor(private router:Router, private animationCtrl: AnimationController) { }

    //lottie
    animationCreated(animationItem: AnimationItem):void{
      console.log(animationItem);
    }
 
  siguiente(){
    let navigationExtras: NavigationExtras={
      state:{dato:this.dato}
    };
    this.router.navigate(['/login'],navigationExtras)
  }

  ngAfterViewInit() {
    const logo = this.animationCtrl.create()
    .addElement(this.boton.nativeElement)
    .duration(6000)
    .iterations(1)
    .fromTo('transform', 'translateY(100px)', 'translateX(0px)')
    .fromTo('opacity', '0.2', '1');
      logo.play();
  }
}
