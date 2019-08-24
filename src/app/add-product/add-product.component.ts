import { Component, OnInit, OnChanges, Input} from '@angular/core';
import { DataService } from '../services/data.service';
import { LoginService } from '../services/login.service';
import { Category } from '../model/category';
import { Product } from '../model/product';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnChanges, OnInit{

  categoryArray: Category[];
  productForm: FormGroup;
  @Input() patchProduct: Product;
  title = 'Add Product'

  constructor(private loginService: LoginService, private dataService: DataService, private fb: FormBuilder) {
    this.productForm = fb.group({
      category: [null, Validators.required],
      image: ['', Validators.required],
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      description: ''
    })
   }

  get categoryForm() : AbstractControl {
    return this.productForm.get('category');
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
  }

  ngOnChanges() {
    const category = this.dataService.getCatogory(this.patchProduct.categoryId);
    this.productForm.setValue({
      category: category,
      image: this.patchProduct.image,
      title: this.patchProduct.title,
      price: this.patchProduct.price,
      description: this.patchProduct.description
    });
    this.title = 'Edit Product'
    }

  onSubmit() {
    const tempProduct = this.productForm.value;
    const product: Product = {
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
    }
    this.productForm.reset();
  }

  isLoggedIn() {
    return this.loginService.isLoggedIn();
  }
    
}
