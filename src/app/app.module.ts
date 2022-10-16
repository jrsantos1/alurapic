import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SharedModule } from 'src/shared/shared.module';
import { ErrorsModule } from './errors/errors.module';
// import modules

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ErrorsModule,
    HomeModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
