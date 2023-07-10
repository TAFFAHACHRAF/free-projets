import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaveLoginPage } from './save-login.page';

const routes: Routes = [
  {
    path: '',
    component: SaveLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaveLoginPageRoutingModule {}
