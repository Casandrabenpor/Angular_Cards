import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  products: Product[] = [];
  productsToShow: Product[] = [];

  constructor(private productService: ProductService) {}
  //Coge el get de los datos de la api
  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.productsToShow = this.products;
    });
  }

  //HEART
  public visible = false;

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }
  // SEARCH
  searchProduct(event: any) {
    if (!event.target.value) {
      this.productsToShow = this.products;
    }
    this.productsToShow = this.products.filter((product) =>
      product.title.toUpperCase().includes(event.target.value.toUpperCase())
    );
  }
}
