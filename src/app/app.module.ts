import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,BrowserModule,HttpClientModule
  ],
  bootstrap:[AppComponent]
  ,
  providers: [ApiService]
})
export class AppModule {}
