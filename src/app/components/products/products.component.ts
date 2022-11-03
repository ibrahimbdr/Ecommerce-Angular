import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { ApiService } from 'src/app/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList: IProduct[]=[];

  constructor(private serviceAPI: ApiService) {
    console.log("loaded");

  }

  ngOnInit(): void {
    console.log("loaded");

    this.serviceAPI.getProducts().subscribe();
  }

}
