import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashboardComponent } from './dashbord/dashbord.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AheaderComponent } from './aheader/aheader.component';
import { SocialsComponent } from './socials/GET/socials.component';
import { UsersComponent } from './users/GET/users.component';
import { AddUsersComponent } from './users/CREATE/add-users.component';
import { CreateCardComponent } from './cards/CREATE/create.cards';
import { UpdateCardsComponent } from './cards/UPDATE/update.cards';
import { AdminCardsComponent } from './cards/GET/admin.cards';
import { CreateSocialComponent } from './socials/CREATE/create.social';
import { UpdateSocialComponent } from './socials/UPDATE/update.social';
import { UpdateUsersComponent } from './users/UPDATE/update-users.component';
import { AdminProfileComponent} from './profile/admin.profile.component';

@NgModule({
  declarations: [
    AlayoutComponent,
    DashboardComponent,
    AdminCardsComponent,
    CreateCardComponent,
    UpdateCardsComponent,
    CreateCardComponent,
    SocialsComponent,
    CreateSocialComponent,
    UpdateSocialComponent,
    UsersComponent,
    AddUsersComponent,
    UpdateUsersComponent,
    AdminProfileComponent,
    SidemenuComponent,
    AheaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
