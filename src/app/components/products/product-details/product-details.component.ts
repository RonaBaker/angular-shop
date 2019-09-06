import { Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import { Product } from 'src/app/model/product';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  productDetails: Product;
  @Input() contentState: string;
  subscription: Subscription;

  constructor(private loginService: LoginService, private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.paramMap.subscribe(p => this.loadProduct(p.get('id')));
  }

  loadProduct(productId: string) {
    this.productDetails = this.dataService.getProduct(productId);
    if (this.productDetails === undefined) {
      this.router.navigate(['products', productId, 'productNotFound'])
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
