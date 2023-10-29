import {  Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favorites: Product[] = []; // Arreglo para almacenar los productos favoritos.
  favoritesToShow: Product[] = []; // Arreglo para mostrar los productos favoritos en la vista.

  constructor(private cartService: CartService) {} // Inyección del servicio CartService.

  ngOnInit(): void {
    this.init(); // Llama a la función 'init' en la inicialización del componente.
  }

  // SEARCH
  searchProduct(event: any) {
    if (!event.target.value) {
      // Si no se ha ingresado ningún valor en la búsqueda, mostrar todos los productos favoritos.
      this.favoritesToShow = this.favorites;
    }
    // Filtrar los productos favoritos por título según la cadena de búsqueda ingresada.
    this.favoritesToShow = this.favorites.filter((product) =>
      product.title.toUpperCase().includes(event.target.value.toUpperCase())
    );
  }

  // Método para actualizar la vista.
  refresh() {
    this.init(); // Llama a la función 'init' para recargar los productos favoritos.
  }

  // Método privado para inicializar los productos favoritos.
  private init() {
    this.favorites = this.cartService.getItems(); // Obtiene los productos favoritos del servicio.
    this.favoritesToShow = this.favorites; // Inicializa la vista con los productos favoritos.
  }
}
