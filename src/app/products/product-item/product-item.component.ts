import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product} from '../../model/product';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Output() productDetails = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Input() product: Product;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  changeContentProduct() {
    this.productDetails.emit({product: this.product, from: 'products'});
  }

  isPermitted() {
    if (this.loginService.isLoggedIn() && this.loginService.hasPermission()) {
      return true;
    }
  }

  editProduct() {
    this.edit.emit(this.product);
  }

}
