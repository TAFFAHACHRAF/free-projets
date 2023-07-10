import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Forgot2PageRoutingModule } from './forgot2-routing.module';

import { Forgot2Page } from './forgot2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Forgot2PageRoutingModule
  ],
  declarations: [Forgot2Page]
})
export class Forgot2PageModule {}
