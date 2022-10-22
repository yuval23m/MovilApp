import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class GloginGuard implements CanActivate {
  permiso:any;
  constructor(private router:Router, private storage:StorageService) { } 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAuth();
  }
  async checkAuth(){
    try {
      this.permiso = await this.storage.getAuth();
    } catch (error) {
      console.log(error)
    }
    if(this.permiso == false){
      console.log(this.permiso);
      
      console.log('NO TIENE PERMISO');
      this.router.navigate(['login']);
      return false;
    }
    console.log("si tiene permiso")
    return true;
  }
}
