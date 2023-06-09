import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponenetComponent } from './footer/footer-componenet/footer-componenet.component';
import { ProductComponenetComponent } from './product/product-componenet/product-componenet.component';
import { RealHeaderComponenetComponent } from './headerComponenet/real-header-componenet/real-header-componenet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Home/home/home.component';
import { UserComponent } from './User/user/user.component';
import { PostsComponent } from './Posts/posts/posts.component';
import { ErrorComponent } from './PageNotFound/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentComponent } from './comment/comment/comment.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { ReactivRegusterationComponent } from './reactiveFormRegisteration/reactiv-regusteration/reactiv-regusteration.component';
import { ReactiveLoginComponent } from './ReactiveFormLogin/reactive-login/reactive-login.component';
import { NotesComponent } from './notesPage/notes/notes.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponenetComponent,
    ProductComponenetComponent,
    RealHeaderComponenetComponent,
    HomeComponent,
    UserComponent,
    PostsComponent,
    ErrorComponent,
    CommentComponent,
    LoginComponent,
    RegisterComponent,
    ReactivRegusterationComponent,
    ReactiveLoginComponent,
    NotesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
