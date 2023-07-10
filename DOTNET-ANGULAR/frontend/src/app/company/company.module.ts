import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashboardComponent } from './dashbord/dashbord.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AheaderComponent } from './aheader/aheader.component';
import { CompanyCardsComponent } from './cards/GET/company.cards';
import { CompanyProfileComponent } from './profile/company.profile.component';
import { FormsModule } from '@angular/forms';
import { CompanyCreateCardComponent } from './cards/CREATE/company.create.cards';
import { CompanyUpdateCardsComponent } from './cards/UPDATE/company.update.cards';


@NgModule({
  declarations: [
    AlayoutComponent,
    DashboardComponent,
    CompanyCardsComponent,
    CompanyCreateCardComponent,
    CompanyUpdateCardsComponent,
    CompanyProfileComponent,
    SidemenuComponent,
    AheaderComponent,
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule
  ]
})
export class CompanyModule { }
