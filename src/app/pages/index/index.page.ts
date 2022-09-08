import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  user:any;

  constructor(private activeroute: ActivatedRoute, private router: Router, public alertController:AlertController) {
    this.activeroute.queryParams.subscribe(params => { 
      if (this.router.getCurrentNavigation().extras.state) { 
        this.user = this.router.getCurrentNavigation().extras.state.user;
      }else{this.router.navigate(["/login"])}
    });
  }
  
  ngOnInit() {
  }

}
