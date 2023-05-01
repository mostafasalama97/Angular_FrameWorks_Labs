import { productList } from './../../SharedClassesAndTypes/SharedClassesAndTypes.component';
import { Component, Input, OnInit } from '@angular/core';
import { IProduct, DiscountOffers, ICategory } from '../../SharedClassesAndTypes/SharedClassesAndTypes.component'
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-componenet',
  templateUrl: './product-componenet.component.html',
  styleUrls: ['./product-componenet.component.scss']
})

export class ProductComponenetComponent implements OnInit {
  // @Input() parentData : any ;
  productList=[
    {"id":1,"productName":"RedPen"},
    {"id":2,"productName":"BluePen"},
    {"id":3,"productName":"BlackPen"},
    {"id":4,"productName":"YellowPen"},
    {"id":5,"productName":"GreenPen"},

  ]
  // products: IProduct[] = [];
  // Discount: DiscountOffers = DiscountOffers.A;
  // StoreName: string = 'My Store';
  // StoreLogo: string = 'assets/image/2.jpg';
  // src : string = 'assets/image/2.jpg';
  // prdId = 1;
  // CategoryList: ICategory[] = [
  //   {
  //     ID: 1,
  //     Name: 'Category 1'
  //   },
  //   {
  //     ID: 2,
  //     Name: 'Category 2'
  //   }
  // ];
  // ClientName: string = 'Mostafa Salama';
  // IsPurchased: boolean = true;

  // clientName : string = 'Client Name';
  // purchasing(){
  //   this.IsPurchased = !this.IsPurchased
  // }
// constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  // ngOnInit() {
  //   this.products = this.productService.getProducts();
  // }
  // getProductById(prdId: number): IProduct {
  //   return this.productService.getProductById(prdId);
  // }
  // renderValues() {
  //   this.products = this.productService.getProducts();
  // }
  // showDiscountedProducts() {
  //   this.productService.getDiscountedProducts().subscribe((products: IProduct[]) => {
  //     this.productList = products;
  //   });
  //   this.router.navigate(['discounted'], { relativeTo: this.route });
  // }

  // Load products without discount
  // showNonDiscountedProducts() {
  //   this.productService.getNonDiscountedProducts().subscribe((products: { id: number; productName: string; }[]) => {
  //     this.productList = products;
  //   });
  //   this.router.navigate(['non-discounted'], { relativeTo: this.route });
  // }
}
