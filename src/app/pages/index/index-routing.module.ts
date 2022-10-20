import { ComponenteUnoComponent } from './../../components/componente-uno/componente-uno.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';
import { ComponenteDosComponent } from 'src/app/components/componente-dos/componente-dos.component';
import { GloginGuard } from 'src/app/guards/glogin.guard';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,

    children:[
      {
      path:'uno',
      component:ComponenteUnoComponent, canActivate : [GloginGuard]
      },
      {
        path:'dos',
        component:ComponenteDosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
