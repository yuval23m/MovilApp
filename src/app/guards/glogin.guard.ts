import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GloginGuard implements CanActivate {
  permiso : any;

  constructor( private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
      if(localStorage.getItem('ingresado')){
        return true;
      }else{
        this.router.navigate(['/login']);        
        return false;
      }
  }
}
