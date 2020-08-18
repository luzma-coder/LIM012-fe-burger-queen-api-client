import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [
    ProductsService
  ]
})
export class ProductsComponent implements OnInit {

  arrProduct: Product[];
  productForm: FormGroup;
  public archivo: Product;
  public archivosServer: Product;
  public lastPK: number;


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

  listProducts(): void {
    this.productsService.getProducts()
      .subscribe(products => this.arrProduct = products);
  }

  addProduct(dataform): void {
    dataform.dataEntry = Date;
    // dataform.name = name;
    // dataform.price = Price;
    // dataform.type = type;
    dataform.image = Image;
    console.log(dataform);
    this.productsService.postProduct(dataform as Product)
      .subscribe(dataproduct => {
        this.arrProduct.push(dataproduct);
        this.productForm.reset();
      });
  }
  // _____________________________________________________________

  subirArchivo(archivo: Product): void {
    this.productsService.uploadFile(this.archivo).subscribe(resp => { });
  }
  fileEvent(fileInput: Event): void {
    const file = ( fileInput.target as HTMLInputElement).files[0];
    this.archivo = new Product (this.lastPK + 1, file.name, file.type);
  }

  // _____________________________________________________________

  updateProduct(product: Product): void {

  }

  deleteProduct(product: Product): void {
    this.arrProduct = this.arrProduct.filter(data => data !== product);
    this.productsService.deleteProduct(product).subscribe();
  }

  cancel(): void {

  }
  ngOnInit(): void {
    this.listProducts();
    this.productsService.getUploads().subscribe(resp => {
      this.archivosServer = resp;
      this.lastPK = this.archivosServer[resp.length - 1].id;
    });
  }
}
