import { StorageService } from './../services/storage.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnonymousGuard implements CanActivate {
  permiso : any;

  constructor(private storage : StorageService, private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAuth();
  }
  
  checkAuth(){
    this.permiso = this.storage.getAuth();
    if (this.permiso == true){
      this.router.navigate(['index'])
      return true;
    }else{
      console.log('no paso anonymous');
      
      this.router.navigate(['login'])
      return false;
    }
  }
}
