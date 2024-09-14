import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { EstadoService } from '../../servicios/estado.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    
    
  ],
  declarations: [LoginPage,ResetPasswordComponent],  providers: [EstadoService]

})
export class LoginPageModule {}
