import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProduct } from '../models/iproduct';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  productList: IProduct[] = [];
  productIds: number[] = [];
  private httpOptions = {};
  constructor(private hClient: HttpClient) {
    this.productList = [
      {
        id: 1,
        title: 'Mens Casual Premium Slim Fit T-Shirts',
        price: 3000,
        quantity: 5,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: 'mens clothing',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        seller: 'ahmed',
      },
      {
        id: 2,
        title: 'Mens Casual Premium Slim Fit T-Shirts',
        price: 3000,
        quantity: 5,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: 'mens clothing',
        image:
          'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        seller: 'ahmed',
      },
      {
        id: 3,
        title: 'Mens Casual Premium Slim Fit T-Shirts',
        price: 3000,
        quantity: 5,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: 'mens clothing',
        image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
        seller: 'ahmed',
      },
      {
        id: 4,
        title: 'Mens Casual Premium Slim Fit T-Shirts',
        price: 3000,
        quantity: 5,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: 'mens clothing ',
        image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        seller: 'ahmed',
      },
      {
        id: 5,
        title: 'Mens Cotton Jacket jacket for winter',
        price: 3000,
        quantity: 5,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: 'mens clothing',
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        seller: 'ahmed',
      },
      {
        id: 6,
        title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
        price: 3000,
        quantity: 5,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: 'mens clothing',
        image:
          'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        seller: 'ahmed',
      },
      {
        id: 7,
        title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
        price: 3000,
        quantity: 5,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: 'mens clothing',
        image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
        seller: 'ahmed',
      },
      {
        id: 8,
        title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
        price: 3000,
        quantity: 5,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: 'mens clothing',
        image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
        seller: 'ahmed',
      },
      {
        id: 9,
        title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
        price: 3000,
        quantity: 5,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: 'mens clothing',
        image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
        seller: 'ahmed',
      },
    ];
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }
  //
  getAllProducts(): IProduct[] {
    return this.productList;
  }

  getProductId(): number[] {
    this.productList.forEach(prod => {
      this.productIds.push(prod.id);
    })
    return this.productIds;
  }

  getProductById(id: number): IProduct | undefined{
    return this.productList.find((p => p.id == id));
  }

  // getProducts(): Observable<IProduct[]> {
  //   return this.hClient.get<IProduct[]>(
  //     `${environment.apiUrl}/product`,
  //     this.httpOptions
  //   );
  // }
}
