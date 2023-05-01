import { Injectable } from '@angular/core';
import { IProduct, productList } from '../SharedClassesAndTypes/SharedClassesAndTypes.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getDiscountedProducts() {
    throw new Error('Method not implemented.');
  }
  // getDiscountedProducts(): Observable<IProduct[]> {
  //   return of(productList.filter((product) => product.discount > 0));
  // }
  getNonDiscountedProducts() {
    throw new Error('Method not implemented.');
  }
  // getNonDiscountedProducts(): Observable<IProduct[]> {
  //   return of(productList.filter((product) => product.discount > 0));
  // }
  getProducts(): IProduct[] {
    return productList;
  }

//  getProductById(prdId: number): IProduct | any {
//     return productList.find(p => p.ID === prdId);
//   }
  getProductById(prdId: any): IProduct | any {
    // Check if prdId is a number
    if (isNaN(prdId)) {
      return null;
    }
    // Check if product is undefined
    if (!productList) {
      return null;
    }

    // Return the product
    return productList.find(p => p.ID === prdId);;
  }


  constructor() { }
}
