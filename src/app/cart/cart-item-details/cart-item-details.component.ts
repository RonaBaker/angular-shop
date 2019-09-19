import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/model/product';
import { Subscription } from 'rxjs/internal/Subscription';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart-item-details',
  templateUrl: './cart-item-details.component.html',
  styleUrls: ['./cart-item-details.component.css']
})
export class CartItemDetailsComponent implements OnInit {

  productDetails: Product = null;
  subscription: Subscription;
  
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.paramMap.subscribe(p => { this.loadProduct(p.get('id')) });
  }

  loadProduct(productId: string) {
    this.dataService.getProduct(productId)
      .then(o => {
        if (o === undefined) {
          this.router.navigate(['items', productId, 'productNotFound'])
        }
        this.productDetails = o;
      })
      .catch(err => console.log(err));
    }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
