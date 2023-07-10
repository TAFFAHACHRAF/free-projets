import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodePage } from './code.page';

const routes: Routes = [
  {
    path: '',
    component: CodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodePageRoutingModule {}
