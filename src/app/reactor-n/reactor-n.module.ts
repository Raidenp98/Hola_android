import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ReactorNPageRoutingModule } from './reactor-n-routing.module';

import { ReactorNPage } from './reactor-n.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    ReactorNPageRoutingModule
  ],
  declarations: [ReactorNPage]
})
export class ReactorNPageModule {}
