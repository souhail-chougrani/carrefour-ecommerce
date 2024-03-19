import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CardProductComponent } from './card-product/card-product.component';

import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ProductRatingComponent } from './product-rating/product-rating.component';
import { OrdersProductComponent } from './orders-product/orders-product.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CardProductComponent,
    ProductRatingComponent,
    OrdersProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ProductsModule { }
