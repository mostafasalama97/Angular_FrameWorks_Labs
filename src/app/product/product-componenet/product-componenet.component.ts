import { Component, OnInit } from '@angular/core';
import { IProduct, ICategory, DiscountOffers } from '../../SharedClassesAndTypes/SharedClassesAndTypes.component'
@Component({
  selector: 'app-product-componenet',
  templateUrl: './product-componenet.component.html',
  styleUrls: ['./product-componenet.component.scss']
})

export class ProductComponenetComponent {
  Discount: DiscountOffers = DiscountOffers.A;
  StoreName: string = 'My Store';
  StoreLogo: string = 'assets/image/2.jpg';
  src : string = 'assets/image/2.jpg';
  ProductList: IProduct[] = [
    {
      ID: 1,
      Name: 'Product 1',
      Quantity: 10,
      price: 100,
      img: 'assets/image/2.jpg'
    },
    {
      ID: 2,
      Name: 'Product 2',
      Quantity: 5,
      price: 200,
      img: 'assets/image/1.webp'
    }
  ];
  CategoryList: ICategory[] = [
    {
      ID: 1,
      Name: 'Category 1'
    },
    {
      ID: 2,
      Name: 'Category 2'
    }
  ];
  ClientName: string = 'Mostafa Salama';
  IsPurchased: boolean = false;

  constructor() {}
}