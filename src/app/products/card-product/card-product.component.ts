import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {
  @Input() quantity = 0
  @Input() product?: Product;
  @Input() isProductAdded?: boolean;
  @Output() addProduct = new EventEmitter<Product>();
  @Output() addQuantity = new EventEmitter<{product?:Product,quantity:number}>();
  @Output() removeQuantity = new EventEmitter<{product?:Product,quantity:number}>();

  onAddQuantity(){
    this.addQuantity.emit({product:this.product,quantity:this.quantity+1})
  }
  onRemoveQuantity(){
    if(this.quantity>=1)
    this.removeQuantity.emit({product:this.product,quantity:this.quantity-1})
  }
}
