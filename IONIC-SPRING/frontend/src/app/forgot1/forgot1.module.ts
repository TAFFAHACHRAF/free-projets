import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Forgot1PageRoutingModule } from './forgot1-routing.module';

import { Forgot1Page } from './forgot1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Forgot1PageRoutingModule
  ],
  declarations: [Forgot1Page]
})
export class Forgot1PageModule {}
