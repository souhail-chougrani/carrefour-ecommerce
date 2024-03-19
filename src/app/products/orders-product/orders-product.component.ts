import { Component } from '@angular/core';
import { ProductStateService } from '../services/porducts-store.service';

@Component({
  selector: 'app-orders-product',
  templateUrl: './orders-product.component.html',
  styleUrls: ['./orders-product.component.scss']
})
export class OrdersProductComponent {
  selectedProducts$ = this.productStateService.selectedProducts$;
  total$ = this.productStateService.total$;
  constructor(private productStateService: ProductStateService){}

}
