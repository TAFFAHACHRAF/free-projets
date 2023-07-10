import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaveLoginPageRoutingModule } from './save-login-routing.module';

import { SaveLoginPage } from './save-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaveLoginPageRoutingModule
  ],
  declarations: [SaveLoginPage]
})
export class SaveLoginPageModule {}
