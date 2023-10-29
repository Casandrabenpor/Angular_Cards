import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product, ProductCategory } from 'src/app/models/product.model';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss'],
})
export class CreateProductsComponent {
  product: Product | undefined;
  productCategory: ProductCategory | undefined;
  formGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private toastr: ToastrService,
    formBuilder: FormBuilder
  ) {
    this.formGroup = formBuilder.group({
      title: [''],
      price: [''],
      description: [''],
    });
  }

  submit() {
    let formValues = this.formGroup.value;
    let productCreated = {
      title: formValues.title,
      price: formValues.price,
      description: formValues.description,
      categoryId: 1,
      images: ['https://placeimg.com/640/480/any'],
      id: 0
    } as Product;
    this.productService.createProducts(productCreated).subscribe();
  }

  //Toast
  showSuccess() {
    this.toastr.success('Created products', 'Created form');
  }
}
