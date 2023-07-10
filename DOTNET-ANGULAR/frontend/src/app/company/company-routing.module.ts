import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashboardComponent } from './dashbord/dashbord.component';
import { CompanyCardsComponent } from './cards/GET/company.cards';
import { CompanyProfileComponent } from './profile/company.profile.component';
import { CompanyCreateCardComponent } from './cards/CREATE/company.create.cards';
import { CompanyUpdateCardsComponent } from './cards/UPDATE/company.update.cards';
const routes: Routes = [
  {
    path: '', component: AlayoutComponent, children : [
      { path : '', redirectTo : 'dashbord', pathMatch : 'full'},
      { path : 'dashbord', component : DashboardComponent},
      { path : 'cards', component : CompanyCardsComponent},
      { path : 'cards/add', component : CompanyCreateCardComponent},
      { path : 'cards/update/:id', component : CompanyUpdateCardsComponent},
      { path : 'profile', component : CompanyProfileComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
