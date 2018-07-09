import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppMaterialModule} from './app-material/app-material.module';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './app-api/api.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppMaterialModule, HttpClientModule, ApiService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
