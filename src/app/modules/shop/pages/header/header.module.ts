import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchboxComponent } from './searchbox/searchbox.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    SearchboxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
