import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  proudctId:number[]=[];
  currentId:number=0;
  index:number=0;
  product:IProduct|undefined=undefined


  constructor(private activeRoute:ActivatedRoute,
    private router:Router, private productServices:ApiService, private location:Location ) {}

  ngOnInit(): void {
    this.proudctId=this.productServices.getProductId();
    this.activeRoute.paramMap.subscribe(paramMap =>
      {this.currentId=paramMap.get("id")?Number(paramMap.get("id")):0;
      const matched=this.productServices.getProductById(this.currentId)
      if( matched){
        this.product =matched

      }else{
        this.location.back();
      }

    })
  }

  getPrevProduct(){
    this.index = this.proudctId.findIndex(Id => Id == this.currentId);
    this.router.navigate(['products', this.proudctId[--this.index]]);
  }

  getNxtProduct(){
    this.index = this.proudctId.findIndex(Id => Id == this.currentId);
    this.router.navigate(['products', this.proudctId[++this.index]]);
  }

  navigateBack(){
    this.location.back();
  }
}
