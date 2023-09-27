import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

import { PublicModule } from './public/public.module';
import { SharedModule } from './shared/shared.module';
import { PublicRoutingModule } from './public/public-routing.module';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    /**Modules**/
    PrimeNgModule,
    PublicModule,
    SharedModule,
    PublicRoutingModule,

    /**Modules**/
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
