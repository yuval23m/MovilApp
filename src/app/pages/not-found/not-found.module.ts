import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotFoundPageRoutingModule } from './not-found-routing.module';

import { NotFoundPage } from './not-found.page';
//lottie
import {LottieModule} from 'ngx-lottie'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotFoundPageRoutingModule,
    LottieModule
  ],
  declarations: [NotFoundPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NotFoundPageModule {}
