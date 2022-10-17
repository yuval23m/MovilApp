import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {

    //lottie
    options: AnimationOptions = {
      path: "/assets/notf.json"
    }

  constructor() { }

      //lottie
      animationCreada(animationItem: AnimationItem):void{
        console.log('animacion cargada exitosamente');
      }

  ngOnInit() {
  }

}
