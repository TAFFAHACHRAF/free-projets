import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './_utils/error/error.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  {
    path : '', loadChildren : () => import('./public/public.module')
      .then(m => m.PublicModule)
  },
  {
    path : 'auth', loadChildren : () => import('./auth/auth.module')
    .then(m => m.AuthModule)
  },
  {
    path : 'user', loadChildren : () => import('./user/user.module')
      .then(m => m.AdminModule), canActivate: [AuthGuard]
  }, 
  {
    path : 'company', loadChildren : () => import('./company/company.module')
      .then(m => m.CompanyModule), canActivate: [AuthGuard]
  },
  {
    path : 'admin', loadChildren : () => import('./admin/admin.module')
      .then(m => m.AdminModule), canActivate: [AuthGuard]
  },
  {
    path : '**', component : ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
