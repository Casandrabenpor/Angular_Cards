import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  @Input() product!: Product;

  constructor(
    private cartService: CartService,
    private toastr: ToastrService
  ) {}
  // Botón del ♥ en blanco = false
  toggle = false;
//ejecuta cuando el componente se inicializa
//Se busca un elemento en el carrito de compras que tenga el mismo id que el product actual llamando al método getItems() del servicio cartService
  ngOnInit(){
    let favorite = this.cartService.getItems().find(p => p.id == this.product.id);
    if(favorite !== undefined)
    {
      //Si se encuentra un elemento coincidente, se establece this.toggle en true, lo que indica que el producto es un favorito
      this.toggle = true; 
    }
  }
// cambiar el estado de this.toggle cuando se hace clic en un botón.
  toggleHearthButton() {
    this.toggle = !this.toggle;
  }
  // Defina el addToCart()método que agrega el producto actual al favorites
  //para agregar o eliminar un producto del carrito de compras (o de la lista de favoritos) según el valor de this.toggle.
  RemoveOrAddFavorite(product: Product) {
    if(this.toggle){
      this.cartService.addToCart(product);
    }
    else{
      this.cartService.clearCart(product.id);
    }
  }
  //Toast mensaje "Favorite" 
  showSuccess() {
    this.toastr.success('Favorite', 'Favorite');
  }
}
