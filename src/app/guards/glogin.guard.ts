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
      return this.checkAuth()
  }

  async checkAuth(){
    this.permiso = await JSON.parse(localStorage.getItem('auth'));
    console.log(this.permiso)
    if(!this.permiso){
      console.log('NO TIENE PERMISO');
      this.router.navigate(['/login']);
      return false;
    }
    console.log("si tiene permiso")
    return true;
  }
}
