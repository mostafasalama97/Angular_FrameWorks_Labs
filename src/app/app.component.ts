import { Component, ViewChild } from '@angular/core';
import { ProductComponenetComponent } from './product/product-componenet/product-componenet.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DayOneAssignement';
  message : string = "i am your son i am product and you are my dad you are app componenet";
  @ViewChild(ProductComponenetComponent) productComponent!: ProductComponenetComponent;
  showProductsTable: boolean = false;

  showProducts() {
    this.showProductsTable = true;
    this.productComponent.renderValues();
  }
}
