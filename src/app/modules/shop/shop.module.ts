import { BodyModule } from './pages/body/body.module';
import { HeaderModule } from './pages/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { MainPageComponent } from './pages/layouts/main-page/main-page.component';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    BodyModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
