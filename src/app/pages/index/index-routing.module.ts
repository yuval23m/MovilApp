import { ComponenteDosComponent } from './../../components/componente-dos/componente-dos.component';
import { ComponenteUnoComponent } from './../../components/componente-uno/componente-uno.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,

    children:[
      {
      path:'uno',
      component:ComponenteUnoComponent
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
