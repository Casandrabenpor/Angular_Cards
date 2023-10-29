import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FavoritesComponent } from './modules/favorites-page/favorites-page.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { IconSetService } from '@coreui/icons-angular';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsPageComponent } from './modules/product-details-page/product-details-page.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './modules/login-page/login-page.component';
import { CreateProductsPageComponent } from './modules/create-products-page/create-products-page.component';
@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    ProductDetailsPageComponent,
    LoginPageComponent,
    CreateProductsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    //https://github.com/scttcper/ngx-toastr
    ToastrModule.forRoot(),
    HttpClientModule,
    MatPaginatorModule,
    FormsModule,
  ],
  providers: [IconSetService],
  bootstrap: [AppComponent],
})
export class AppModule {}
