import { UserModule } from './pages/user/user.module';
import { BodyModule } from './pages/body/body.module';
import { HeaderModule } from './pages/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { MainPageComponent } from './pages/layouts/main-page/main-page.component';
import { FooterModule } from './pages/footer/footer.module';
import { LoginRegisterPageComponent } from './pages/layouts/login-register-page/login-register-page.component';
import { ProfilePageComponent } from './pages/layouts/profile-page/profile-page.component';


@NgModule({
  declarations: [
    MainPageComponent,
    LoginRegisterPageComponent,
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    BodyModule,
    FooterModule,
    UserModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
