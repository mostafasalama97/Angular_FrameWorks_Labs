import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponenetComponent } from './footer/footer-componenet/footer-componenet.component';
import { ProductComponenetComponent } from './product/product-componenet/product-componenet.component';
import { RealHeaderComponenetComponent } from './headerComponenet/real-header-componenet/real-header-componenet.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponenetComponent,
    ProductComponenetComponent,
    RealHeaderComponenetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
