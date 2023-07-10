import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashboardComponent } from './dashbord/dashbord.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AheaderComponent } from './aheader/aheader.component';
import { UserCardsComponent } from './cards/GET/user.cards';
import { SocialsComponent } from './socials/GET/socials.component';
import { UserProfileComponent } from './profile/user.profile.component';
import { FormsModule } from '@angular/forms';
import { CreateCardComponent } from './cards/CREATE/create.cards';
import { UpdateCardsComponent } from './cards/UPDATE/update.cards';
import { CreateSocialComponent } from './socials/CREATE/create.socials';


@NgModule({
  declarations: [
    AlayoutComponent,
    DashboardComponent,
    UserCardsComponent,
    CreateCardComponent,
    UpdateCardsComponent,
    SocialsComponent,
    CreateSocialComponent,
    UserProfileComponent,
    SidemenuComponent,
    AheaderComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
