import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './components/sign-in-page/sign-in-page.component';
import { ProductListingPageComponent } from './components/product-listing-page/product-listing-page.component';
import { ProductRegisteringPageComponent } from './components/product-registering-page/product-registering-page.component';
import { ProductHistoryListingPageComponent } from './components/product-history-listing-page/product-history-listing-page.component';



@NgModule({
  declarations: [
    SignInPageComponent,
    ProductListingPageComponent,
    ProductRegisteringPageComponent,
    ProductHistoryListingPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
