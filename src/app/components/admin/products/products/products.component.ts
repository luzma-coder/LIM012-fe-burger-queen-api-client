import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  arrProduct: Product[];
  productForm: FormGroup;

  constructor(
    private productsService: ProductsService,
    private fbuilder: FormBuilder,
  ) {
    this.productForm = this.fbuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      type: ['', Validators.required],
      image: ['']
    });
  }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts(): void {
    this.productsService.getProducts()
      .subscribe(products => this.arrProduct = products);
  }

  addProduct(dataform): void {
    dataform.dataEntry = Date;
    // dataform.name = name;
    // dataform.price = Price;
    // dataform.type = type;
    // dataform.image = Image;
    console.log(dataform);
    this.productsService.postProduct(dataform as Product)
      .subscribe(dataproduct => {
        this.arrProduct.push(dataproduct);
        this.productForm.reset();
      });
  }

  // addProduct(name: string, price: number, image: URL, type: string): void {
  //   name = name.trim();
  //   price = price.valueOf();
  //   image = image;
  //   type = type;
  //   const objProduct = {
  //     name,
  //     price,
  //     image,
  //     type
  //   };
  //   if (!name) { return; }
  //   this.productsService.postProduct(objProduct as Product)
  //     .subscribe(dataproduct => {
  //       console.log(dataproduct);
  //       this.arrProduct.push(dataproduct);
  //     });
  // }

  updateProduct(product: Product): void {

  }

  deleteProduct(product: Product): void {
    this.arrProduct = this.arrProduct.filter(data => data !== product);
    this.productsService.deleteProduct(product).subscribe();
  }

  cancel(): void {

  }
}
