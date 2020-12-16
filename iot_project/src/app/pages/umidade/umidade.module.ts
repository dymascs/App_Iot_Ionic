import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UmidadePageRoutingModule } from './umidade-routing.module';

import { UmidadePage } from './umidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UmidadePageRoutingModule
  ],
  declarations: [UmidadePage]
})
export class UmidadePageModule {}
