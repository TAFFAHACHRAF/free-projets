import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashboardComponent } from './dashbord/dashbord.component';
import { SocialsComponent } from './socials/GET/socials.component';
import { UserCardsComponent } from './cards/GET/user.cards';
import { UserProfileComponent } from './profile/user.profile.component';
import { CreateCardComponent } from './cards/CREATE/create.cards';
import { UpdateCardsComponent } from './cards/UPDATE/update.cards';
import { CreateSocialComponent } from './socials/CREATE/create.socials';
const routes: Routes = [
  {
    path: '', component: AlayoutComponent, children : [
      { path : '', redirectTo : 'dashbord', pathMatch : 'full'},
      { path : 'dashbord', component : DashboardComponent},
      { path : 'cards', component : UserCardsComponent},
      { path : 'cards/add', component : CreateCardComponent},
      { path : 'cards/update/:id', component : UpdateCardsComponent},
      { path : 'socials', component : SocialsComponent},
      { path : 'socials/add', component : CreateSocialComponent},
      { path : 'profile', component : UserProfileComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
