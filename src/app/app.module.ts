import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { SearchComponent } from './Components/search/search.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http'
import { MovieApiService } from './Services/movie-api.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [MovieApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
