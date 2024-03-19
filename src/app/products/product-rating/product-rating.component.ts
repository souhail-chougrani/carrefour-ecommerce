import { Component, Output,EventEmitter,Input } from '@angular/core';



@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.scss'],

})
export class ProductRatingComponent {
  @Input() rating = 0;
  starWidth = 0;
  @Output() ratingClicked = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 120 / 5;
  }
 
}
