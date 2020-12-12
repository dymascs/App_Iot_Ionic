import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LuminosidadePageRoutingModule } from './luminosidade-routing.module';

import { LuminosidadePage } from './luminosidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LuminosidadePageRoutingModule
  ],
  declarations: [LuminosidadePage]
})
export class LuminosidadePageModule {}
