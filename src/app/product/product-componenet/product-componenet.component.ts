import { Component, Input, OnInit } from '@angular/core';
import { IProduct, DiscountOffers, ICategory } from '../../SharedClassesAndTypes/SharedClassesAndTypes.component'
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-componenet',
  templateUrl: './product-componenet.component.html',
  styleUrls: ['./product-componenet.component.scss']
})

export class ProductComponenetComponent implements OnInit {
  @Input() parentData : any ;
  products: IProduct[] = [];
  Discount: DiscountOffers = DiscountOffers.A;
  StoreName: string = 'My Store';
  StoreLogo: string = 'assets/image/2.jpg';
  src : string = 'assets/image/2.jpg';
  prdId = 1;
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
  IsPurchased: boolean = true;

  clientName : string = 'Client Name';
  purchasing(){
    this.IsPurchased = !this.IsPurchased
  }

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
  getProductById(prdId: number): IProduct {
    return this.productService.getProductById(prdId);
  }
  renderValues() {
    this.products = this.productService.getProducts();
  }
}
