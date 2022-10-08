import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexPageRoutingModule } from './index-routing.module';

import { IndexPage } from './index.page';
import { ComponenteUnoComponent } from 'src/app/components/componente-uno/componente-uno.component';
import { ComponenteDosComponent } from 'src/app/components/componente-dos/componente-dos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPageRoutingModule
  ],
  declarations: [IndexPage, ComponenteUnoComponent, ComponenteDosComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexPageModule {}
