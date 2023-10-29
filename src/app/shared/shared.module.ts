import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from '../modules/home-page/home-page.component';
import { FavoriteCartComponent } from './components/favorite-cart/favorite-cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginComponent } from './components/login/login.component';
import { CreateProductsComponent } from './components/create-products/create-products.component';

@NgModule({
  declarations: [
    NavComponent,
    ProductsComponent,
    HomePageComponent,
    FavoriteCartComponent,
    ProductDetailsComponent,
    LoginComponent,
    CreateProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatTableModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    NavComponent,
    ProductsComponent,
    HomePageComponent,
    FavoriteCartComponent,
    ProductDetailsComponent,
    LoginComponent,
  ],
})
export class SharedModule {}
