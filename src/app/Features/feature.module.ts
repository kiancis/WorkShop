import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MenuCardComponent } from './pages/menu-card/menu-card.component';
import { RouterModule } from '@angular/router';
import { UsersModule } from './pages/users/users.module';
import { CardsModule } from './pages/cards/cards.module';
import { AccountsModule } from './pages/accounts/accounts.module';

@NgModule({
  declarations: [
    HomeComponent,
    MenuCardComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    RouterModule,
    UsersModule,
    CardsModule,
    AccountsModule,

  ]
})
export class FeatureModule { }
