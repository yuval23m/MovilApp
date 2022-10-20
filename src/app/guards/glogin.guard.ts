import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class GloginGuard implements CanActivate {
   constructor(private router:Router, private storage:StorageService) { } 
  async canActivate(
    route: ActivatedRouteSnapshot,
    state:  RouterStateSnapshot): Promise<boolean> {
    const auth = this.storage.getAuth();
    if (!auth){
      await this.router.navigate(['/login']);
    }
    return auth;
  }
 /* async checkAuth(){
    try {
      this.auth = this.storage.getAuth();
      console.log("chek: "+this.auth);
    } catch (error) {
      console.log(error)
    }
    if (this.auth){
      console.log("bien")
      return true;
    }
   // if(this.auth == false){
      console.log('mal');
      console.log(this.auth);
      this.router.navigate(['/login']);
      return false;
   // }
    
  }*/
}
