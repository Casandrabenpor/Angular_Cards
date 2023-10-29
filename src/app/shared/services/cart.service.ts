import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private FAVORITES_KEY = 'FAVORITES_LIST';
  private items : Product[] = [];
  constructor() {}

  addToCart(product: Product) {
    let products = this.getFromLocalStorage();
    products.push(product);
    this.saveToLocalStorage(products);
  }
  getItems() {
    this.items = this.getFromLocalStorage();
    return this.items;
  }

  clearAllCarts() {
    let products = [] as Product[];
    this.items = [];
    this.saveToLocalStorage(products);
  }

  clearCart(id: Number) {
    let products = this.getFromLocalStorage();
    let productsUpdated = products.filter((product) => product.id != id);
    this.items = productsUpdated;
    this.saveToLocalStorage(productsUpdated);
  }

  // Obtener la clave con getItem, si no es json devolver [] vacio, y si es json parsear los objetos producto.
  private getFromLocalStorage(): Product[] {
    let json = localStorage.getItem(this.FAVORITES_KEY);

    if (!json) {
      return [];
    }

    let products = JSON.parse(json) as Product[];
    return products;
  }

  // Guardar en local storage pasando el objeto producto a texto json
  private saveToLocalStorage(products: Product[]) {
    let json = JSON.stringify(products);
    localStorage.setItem(this.FAVORITES_KEY, json);
  }
}
