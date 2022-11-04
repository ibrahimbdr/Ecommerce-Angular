import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { ApiService } from 'src/app/services/api.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productList: IProduct[] = [];
  productArr: IProduct[] = [];

  constructor(private serviceAPI: ApiService, private router: Router) {
    console.log('loaded');
  }

  ngOnInit(): void {
    console.log('loaded');
    //
    this.productList = this.serviceAPI.getAllProducts();
  }
  //
  viewDatalis(id: number) {
    this.router.navigate(['products', id]);
  }
}
