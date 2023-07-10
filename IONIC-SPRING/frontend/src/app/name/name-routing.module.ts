import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NamePage } from './name.page';

const routes: Routes = [
  {
    path: '',
    component: NamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NamePageRoutingModule {}
