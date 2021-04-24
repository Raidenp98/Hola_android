import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReactorNPageRoutingModule } from './reactor-n-routing.module';

import { ReactorNPage } from './reactor-n.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactorNPageRoutingModule
  ],
  declarations: [ReactorNPage]
})
export class ReactorNPageModule {}
