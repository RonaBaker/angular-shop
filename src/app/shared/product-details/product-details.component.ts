import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Product } from 'src/app/core/model/product';
import { LoginService } from 'src/app/login/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  productDetails: Product = null;
  subscription: Subscription;

  constructor(private loginService: LoginService, private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.paramMap.subscribe(p => { this.loadProduct(p.get('id')) });
  }

  loadProduct(productId: string) {
    this.dataService.getProduct(productId)
      .then(o => {
        if (o === undefined) {
          this.router.navigate(['products', productId, 'productNotFound'])
        }
        this.productDetails = o;
      })
      .catch(err => console.log(err));
    }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
