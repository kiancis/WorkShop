import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsDetailsComponent } from './cards-details/cards-details.component';
import { CardsFormComponent } from './cards-form/cards-form.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/Core/core.module';


@NgModule({
  declarations: [
    CardsDetailsComponent,
    CardsFormComponent,
    CardsListComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class CardsModule { }
