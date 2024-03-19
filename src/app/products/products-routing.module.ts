import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { OrdersProductComponent } from './orders-product/orders-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'orders', component: OrdersProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
