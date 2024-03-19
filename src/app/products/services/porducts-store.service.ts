import { ProductApiService } from './product-api.service';
import { Injectable } from "@angular/core";
import { StateService } from "../../store.service";
import { map, tap } from 'rxjs';
import { Product, ProductCard } from '../models/product';


interface ProductState{
    loading:boolean;
    error:string | null;
    products:Product[];
    selectedProducts:ProductCard[]
}

const initialState: ProductState = {
    loading: false,
    error: null,
    products:[],
    selectedProducts:[] // added to cart !
};


@Injectable({ providedIn: 'root' })
export class ProductStateService extends StateService<ProductState> {
    products$ = this.select(state=>state.products);
    selectedProducts$ = this.select(state=>state.selectedProducts);
    selectedProductsLength$ = this.selectedProducts$.pipe(map(e=>e.length));

    total$ = this.selectedProducts$.pipe(
        map(items => items.reduce((acc: any, cur: any) => {
            acc = acc + Number(cur.price) * Number(cur?.quantity)
            return acc;
        }, 0)));

    constructor(private productApiService: ProductApiService){
        super(initialState)
    }

    loadProducts(){
        this.setState({loading:true})
        return this.productApiService.getProducts().pipe(tap(products=>this.setState({products})))
    }
   
    addToCard(newProduct:ProductCard){
        this.setState({selectedProducts:[...this.state.selectedProducts,newProduct]})
    }

    updateProductCard(updatedProduct:ProductCard){
      const selectedProducts =  this.state.selectedProducts.map(e => {
            if (e.id === updatedProduct.id) {
                return updatedProduct;
            }
            return e
        });
        this.setState({selectedProducts})
    }

    removeProductCard(id:number){
        const selectedProducts = this.state.selectedProducts.filter(item => item.id !== id)
        this.setState({selectedProducts})
    }

    isProductAdded(id:number){
       return this.state.selectedProducts.map(e=>e?.id).includes(id)
    }
    getQuantity(id:number){
       return this.state.selectedProducts.find(e=>e?.id===id)?.quantity || 0;
    }

}