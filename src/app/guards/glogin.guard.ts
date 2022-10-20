import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class GloginGuard implements CanActivate {
  auth:any;

  constructor(private router:Router, private storage:StorageService) { } 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAuth();
  }
  async checkAuth(){
    try {
      this.auth = this.storage.getAuth();
    } catch (error) {
      console.log(error)
    }
    if(!this.auth){
      console.log('NO TIENE PERMISO');
      this.router.navigate(['/login']);
      return false;
    }
    console.log("si tiene permiso")
    return true;
  }
}
