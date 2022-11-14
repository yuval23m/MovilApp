import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajeActivoPageRoutingModule } from './viaje-activo-routing.module';

import { ViajeActivoPage } from './viaje-activo.page';

//lottie animacion
import {LottieModule} from 'ngx-lottie'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajeActivoPageRoutingModule,
    LottieModule
  ],
  declarations: [ViajeActivoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViajeActivoPageModule {}
