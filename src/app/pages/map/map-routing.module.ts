import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GloginGuard } from 'src/app/guards/glogin.guard';

import { MapPage } from './map.page';

const routes: Routes = [
  {
    path: '',
    component: MapPage, canActivate : [GloginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapPageRoutingModule {}
