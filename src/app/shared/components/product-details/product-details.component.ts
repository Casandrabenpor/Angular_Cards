import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../../services/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  formGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private productService: ProductService,
    formBuilder: FormBuilder
  ) {
    this.formGroup = formBuilder.group({
      title: [''],
      price: [''],
      description: [''],
    });
  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('productId');

    // Find the product that correspond with the id provided in route.
    this.productService.getProduct(productIdFromRoute).subscribe((product) => {
      this.product = product;
      this.formGroup.setValue({
        title: product.title,
        price: product.price,
        description: product.description,
      });
    });
  }

  //https://michael-karen.medium.com/how-to-combine-add-and-edit-forms-in-angular-a78796ed0670
  submit() {
    let formValues = this.formGroup.value;
    let productUpdated = {
      id: this.product?.id,
      title: formValues.title,
      price: formValues.price,
      description: formValues.description,
    } as Product;
    console.log('eee');
    this.productService.updateProducts(productUpdated).subscribe((product) => {
      this.product = product;
      console.log('guardado');
    });
  }

  //Toast
  showSuccess() {
    this.toastr.success('Edited form', 'Edited form');
  }
}
