import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'name',
    loadChildren: () => import('./name/name.module').then(m => m.NamePageModule)
  },
  {
    path: 'gender',
    loadChildren: () => import('./gender/gender.module').then(m => m.GenderPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then(m => m.PasswordPageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./change-password/change-password.module').then(m => m.PasswordPageModule)
  },
  {
    path: 'email',
    loadChildren: () => import('./email/email.module').then(m => m.EmailPageModule)
  },
  {
    path: 'home1/:firstName/:lastName',
    loadChildren: () => import('./home1/home1.module').then(m => m.Home1PageModule)
  },
  {
    path: 'save-login',
    loadChildren: () => import('./save-login/save-login.module').then(m => m.SaveLoginPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./verify/verify.module').then(m => m.VerifyPageModule)
  },
  {
    path: 'code',
    loadChildren: () => import('./code/code.module').then(m => m.CodePageModule)
  },
  {
    path: 'forgot1',
    loadChildren: () => import('./forgot1/forgot1.module').then(m => m.Forgot1PageModule)
  },
  {
    path: 'forgot2',
    loadChildren: () => import('./forgot2/forgot2.module').then(m => m.Forgot2PageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then(m => m.AccueilPageModule)
  },
  {
    path: 'new-password',
    loadChildren: () => import('./new-password/new-password.module').then(m => m.NewPasswordPageModule)
  },
  {
    path: 'product/:id',
    loadChildren: () => import('./product/product.module').then(m => m.ProductPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
