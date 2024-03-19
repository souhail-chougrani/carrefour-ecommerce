import { Component } from '@angular/core';
import { ProductStateService } from './services/porducts-store.service';
import { Product, ProductCard } from './models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products$ = this.productStateService.products$;


  constructor(private productStateService: ProductStateService) { }

  ngOnInit() {
    this.productStateService.loadProducts().subscribe();
  }

  addProduct(product: Product) {
    const newProduct: ProductCard = { ...product, quantity: 1 }
    this.productStateService.addToCard(newProduct);
  }

  addQuantity(result: {product: Product,quantity:number}){
    const productToUpdate: ProductCard = { ...result.product, quantity:result.quantity }
    this.productStateService.updateProductCard(productToUpdate);
  }
  removeQuantity(result: {product: Product,quantity:number}){
    const productToUpdate: ProductCard = { ...result.product, quantity:result.quantity }
    this.productStateService.updateProductCard(productToUpdate);
  }

  isProductAdded(id:number){
    return this.productStateService.isProductAdded(id)
  }
  getQuantity(id:number){
    return this.productStateService.getQuantity(id)
  }
}
