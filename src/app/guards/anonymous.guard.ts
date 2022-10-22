import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AnonymousGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: StorageService,
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    const isAuthenticated = await this.authService.getAuth();
    if (isAuthenticated) {
      await this.router.navigate(['/index']);
    }
    return isAuthenticated;
  }

}
