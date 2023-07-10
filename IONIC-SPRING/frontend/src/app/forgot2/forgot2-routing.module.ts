import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Forgot2Page } from './forgot2.page';

const routes: Routes = [
  {
    path: '',
    component: Forgot2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Forgot2PageRoutingModule {}
