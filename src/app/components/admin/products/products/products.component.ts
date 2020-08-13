import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  arrProduct: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts(): void {
    this.productsService.getProducts()
      .subscribe(products => this.arrProduct = products);
  }

  addProduct(name: string, price: number, image: URL, type: string): void {
    name = name.trim();
    price = price.valueOf();
    image = image;
    type = type;
    const objProduct = {
      name,
      price,
      image,
      type
    };
    if (!name) { return; }
    this.productsService.postProduct(objProduct as Product)
      .subscribe(dataproduct => {
        console.log(dataproduct);
        this.arrProduct.push(dataproduct);
      });
  }

  updateProduct(product: Product): void {

  }

  deleteProduct(product: Product): void {
    this.arrProduct = this.arrProduct.filter(data => data !== product);
    this.productsService.deleteProduct(product).subscribe();
  }

  cancel(): void {

  }
}
