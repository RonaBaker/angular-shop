import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/model/product';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Output() productsView = new EventEmitter();
  @Output() cartView = new EventEmitter();
  @Input() productDetails: Product;
  @Input() contentState: string;
  @Input() fromElement: string;
  @Output() edit = new EventEmitter();

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  returnToProductsView() {
    this.productsView.emit();
  }

  returnToCartView() {
    this.cartView.emit();
  }

  isPermitted() {
    if (this.loginService.isLoggedIn() && this.loginService.hasPermission()) {
      return true;
    }
  }

  editProduct() {
    this.edit.emit(this.productDetails);
  }


}
