import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Forgot1Page } from './forgot1.page';

const routes: Routes = [
  {
    path: '',
    component: Forgot1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Forgot1PageRoutingModule {}
