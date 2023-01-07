import { BodyModule } from './pages/body/body.module';
import { HeaderModule } from './pages/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { MainPageComponent } from './pages/layouts/main-page/main-page.component';
import { FooterModule } from './pages/footer/footer.module';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    BodyModule,
    FooterModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
