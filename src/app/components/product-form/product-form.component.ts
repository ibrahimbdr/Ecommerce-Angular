import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  // newProduct: IProduct = {} as IProduct;
  currentId!: number;
  productFormGroup: FormGroup;
  productnewForm!: IProduct;
  productsList: IProduct[] = [];
  constructor(
    private activeRoute: ActivatedRoute,
    private location: Location,
    private router: Router,
    private PserviceAPI: ApiService,
    private formBuilder: FormBuilder
  ) {
    this.productFormGroup = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      description: ['', [Validators.required]],
      Image:  ['', [Validators.required]],
      category: ['', [Validators.required]]
    });
  }

  get title() {
    return this.productFormGroup.get('title');
   }
   get price() {
    return this.productFormGroup.get('price');
   }
   get quantity() {
    return this.productFormGroup.get('quantity');
   }
   get description() {
    return this.productFormGroup.get('description');
   }
   get image() {
    return this.productFormGroup.get('image');
   }
   get category() {
    return this.productFormGroup.get('category');
   }

  ngOnInit(): void {}

  addProduct(newProduct: IProduct): void {
    // this.PserviceAPI.ProductList.push(newProduct);
    this.router.navigate(['products']);
  }

  navigateBack() {
    this.location.back();
  }
}
