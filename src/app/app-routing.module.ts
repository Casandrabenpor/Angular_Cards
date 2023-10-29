import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './modules/favorites-page/favorites-page.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { ProductDetailsComponent } from './shared/components/product-details/product-details.component';
import { LoginPageComponent } from './modules/login-page/login-page.component';
import { LoginComponent } from './shared/components/login/login.component';
import { CreateProductsComponent } from './shared/components/create-products/create-products.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
  {
    path: 'products/:productId',
    component: ProductDetailsComponent,
  },
  {
    path: 'createProducts',
    component: CreateProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
