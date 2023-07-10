import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashboardComponent } from './dashbord/dashbord.component';
import { SocialsComponent } from './socials/GET/socials.component';
import { UsersComponent } from './users/GET/users.component';
import { AddUsersComponent } from './users/CREATE/add-users.component';
import { CreateCardComponent } from './cards/CREATE/create.cards';
import { UpdateCardsComponent } from './cards/UPDATE/update.cards';
import { AdminCardsComponent } from './cards/GET/admin.cards';
import { UpdateSocialComponent } from './socials/UPDATE/update.social';
import { CreateSocialComponent } from './socials/CREATE/create.social';
import { UpdateUsersComponent } from './users/UPDATE/update-users.component';
import { AdminProfileComponent } from './profile/admin.profile.component';

const routes: Routes = [
  {
    path: '',
    component: AlayoutComponent,
    children: [
      { path: '', redirectTo: 'dashbord', pathMatch: 'full' },
      { path: 'dashbord', component: DashboardComponent },
      { path: 'cards', component: AdminCardsComponent },
      { path: 'cards/add', component: CreateCardComponent },
      { path: 'cards/update/:id', component: UpdateCardsComponent },
      { path: 'socials', component: SocialsComponent },
      { path: 'socials/add', component: CreateSocialComponent },
      { path: 'socials/update/:id', component: UpdateSocialComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/add', component: AddUsersComponent },
      { path: 'users/update/:id', component: UpdateUsersComponent },
      { path: 'profile', component: AdminProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
