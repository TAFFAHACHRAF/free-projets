import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailPage } from './email.page';

const routes: Routes = [
  {
    path: '',
    component: EmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailPageRoutingModule {}
