import { OrderDetailsComponent } from './pages/body/profile/order-details/order-details.component';
import { UserOrdersComponent } from './pages/body/profile/order/user-orders.component';
import { ProfileComponent } from './pages/body/profile/profile/profile.component';
import { ProfilePageComponent } from './pages/layouts/profile-page/profile-page.component';
import { CartComponent } from './pages/body/cart/cart/cart.component';
import { LoginRegisterPageComponent } from './pages/layouts/login-register-page/login-register-page.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProductDetailComponent } from './pages/body/product-detail/product-detail/product-detail.component';
import { BodyComponent } from './pages/body/body/body.component';
import { MainPageComponent } from './pages/layouts/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", component: MainPageComponent, children: [
      { path: "", component: BodyComponent },
      { path: "details/:productid", component: ProductDetailComponent },
      { path: "cart", component: CartComponent }
    ]
  },
  {
    path: "", component: LoginRegisterPageComponent, children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent }
    ]
  },
  {
    path: "", component: ProfilePageComponent, children: [
      { path: "profile", component: ProfileComponent },
      { path: "orders", component: UserOrdersComponent },
      { path: "orderdetails", component: OrderDetailsComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
