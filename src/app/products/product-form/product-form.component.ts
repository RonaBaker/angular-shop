import { Component, OnInit, OnChanges, Input} from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { LoginService } from '../../core/services/login.service';
import { Category } from '../../core/model/category';
import { Product } from '../../core/model/product';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router, RouterState, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit{

  categoryArray: Observable<Category[]>;
  productForm: FormGroup;
  title = 'Add Product'

  constructor(private loginService: LoginService, 
              private dataService: DataService,
              private cartService: CartService, 
              private fb: FormBuilder, 
              private route: ActivatedRoute,
              private router: Router) {
    this.productForm = fb.group({
      category: [null, Validators.required],
      id: ['', Validators.required],
      image: ['', Validators.required],
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      description: ''
    })
   }


  get categoryForm() : AbstractControl {
    return this.productForm.get('category');
  }

  get idForm() : AbstractControl {
    return this.productForm.get('id');
  } 

  get imageForm() : AbstractControl {
    return this.productForm.get('image');
  }

  get titleForm() : AbstractControl {
    return this.productForm.get('title');
  }

  get priceForm() : AbstractControl {
    return this.productForm.get('price');
  }
  
  get description() : AbstractControl {
    return this.productForm.get('description');
  }

  ngOnInit() {
    this.categoryArray = this.dataService.getCategories();
    if (this.route.snapshot.data['editProduct']) { // true when we want to edit the product
      const id = this.route.snapshot.paramMap.get('id');
      this.dataService.getProduct(id)
      .then( product => {
        if (product !== undefined) {
          this.setProductForm(product);
        }
        else {
          this.router.navigate(['products', id, 'productNotFound']);
        }
      })
      .catch(err => console.log(err))

    } 
  }

  async setProductForm(product: Product) { // Called when we want to edit the product
    let category: Category;
     await this.dataService.getCategory(product.categoryId).then(
      c => { 
        category = c;
      })
      .catch(err => console.log(err));
    this.productForm.setValue({
      category: category,
      image: product.image,
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description
    });
    this.title = 'Edit Product'
    }

  onSubmit() {
    const tempProduct = this.productForm.value;
    const product: Product = {
      id: tempProduct.id,
      categoryId: tempProduct.category.id,
      image: tempProduct.image,
      title: tempProduct.title,
      price: tempProduct.price,
      description: tempProduct.description
    }

    if (this.dataService.addProduct(product)) { // Product has been added
      window.alert("Product has been added successfully");
    }
    else { // Product has been editted
      window.alert("Product has been editted successfully");
      this.cartService.updateCart(product);
    }
    this.productForm.reset();
  }

  isLoggedIn() {
    return this.loginService.isLoggedIn();
  }

  canDeactivate() : Observable<boolean> | Promise<boolean> | boolean {
    if (this.productForm.dirty) {
      const res = window.confirm('Discard Changes?');
      if (res === true) {
       return true;
      }
       else {
         return false;
       }
     }
     else return true;
  } 
} 