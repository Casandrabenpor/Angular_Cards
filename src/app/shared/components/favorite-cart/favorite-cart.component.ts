import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/models/product.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-favorite-cart',
  templateUrl: './favorite-cart.component.html',
  styleUrls: ['./favorite-cart.component.scss'],
})
export class FavoriteCartComponent {
  @Output() itemRemoved = new EventEmitter<void>(); // Evento para notificar la eliminación de un ítem.
  @Input() product: Product = {
    id: 0,
    description: '',
    images: [],
    price: 0,
    title: '',
  }; // Propiedad de entrada para el producto que se mostrará en el componente.

  constructor(
    private cartService: CartService, // Servicio para gestionar el carrito de compras.
    private toastr: ToastrService // Servicio para mostrar notificaciones estilo "toast".
  ) {}

  CardDelete(id: number) {
    try {
      // Intenta eliminar un ítem del carrito de compras.
      this.cartService.clearCart(id);
      // Emite el evento 'itemRemoved' para notificar que se ha eliminado un ítem.
      this.itemRemoved.emit();
      // Muestra una notificación de éxito.
      this.showSuccess();
    } catch (error) {
      console.error(error);
      // Muestra una notificación de error en caso de problemas.
      this.showError();
    }
  }

  // Método privado para mostrar una notificación de éxito.
  private showSuccess() {
    this.toastr.success('Deleted', 'Deleted');
  }

  // Método privado para mostrar una notificación de error.
  private showError() {
    this.toastr.error('Deleted', "Item don't deleted");
  }
}
