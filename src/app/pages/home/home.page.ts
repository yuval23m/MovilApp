import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage{
  dato:string;
  @ViewChild('logo', { read: ElementRef, static: true }) logo: ElementRef;
  @ViewChild('logo2', { read: ElementRef, static: true }) logo2: ElementRef;

  constructor(private router:Router, private animationCtrl: AnimationController) { }

  siguiente(){
    let navigationExtras: NavigationExtras={
      state:{dato:this.dato}
    };
    this.router.navigate(['/login'],navigationExtras)
  }
  ngAfterViewInit() {
    const logo = this.animationCtrl.create()
    .addElement(this.logo.nativeElement)
    .duration(3000)
    .iterations(1)
    .fromTo('transform', 'translateX(100px)', 'translateX(0px)')
    .fromTo('opacity', '0.2', '1');
      logo.play();

    const logo2 = this.animationCtrl.create()
    .addElement(this.logo2.nativeElement)
    .fill('none')
    .duration(4000)
    .keyframes([
      { offset: 0, transform: 'scale(1)', opacity: '1' },
      { offset: 0.5, transform: 'scale(1.2)', opacity: '0.5' },
      { offset: 1, transform: 'scale(1)', opacity: '1' }
    ]);
    logo2.play()
  }

}
