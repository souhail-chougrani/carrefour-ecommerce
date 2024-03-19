import { ChangeDetectorRef, Component } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { ProductStateService } from './products/services/porducts-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'carrefour-ecommerce';
  mobileQuery!: MediaQueryList;
  private _mobileQueryListener!: () => void;
  selectedProductsLength$ = this.productStateService.selectedProductsLength$;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private productStateService:ProductStateService) {
    this.mobileQuery = media.matchMedia('(max-width: 760px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
