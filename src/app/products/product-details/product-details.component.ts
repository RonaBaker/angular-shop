import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/model/product';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productDetails: Product;
  @Input() contentState: string;

  constructor(private loginService: LoginService, private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(p => this.loadProduct(p.get('id')));
  }

  loadProduct(productId: string) {
    this.productDetails = this.dataService.getProduct(productId);
    if (this.productDetails === undefined) {
      this.router.navigate(['products', productId, 'productNotFound'])
    }
  }

}
