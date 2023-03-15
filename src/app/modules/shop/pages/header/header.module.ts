import { FormsModule } from '@angular/forms';
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
    FormsModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
