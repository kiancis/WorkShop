import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserStatePipe } from './pipes/user/user-state.pipe'
import { CardTypePipe } from './pipes/card/card-type.pipe';
import { StatusPipe } from './pipes/status/status.pipe';
import { AccountTypePipe } from './pipes/account/account-type.pipe';

const COMPONENTS = [
  NavbarComponent
];

const PIPES = [
  UserStatePipe,
  CardTypePipe,
  AccountTypePipe,
  StatusPipe
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES
  ],
  exports: [
    ...PIPES,
    ...COMPONENTS
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
