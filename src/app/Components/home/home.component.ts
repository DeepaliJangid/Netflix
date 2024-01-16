import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/Services/movie-api.service';
// import { ToastrModule} from '.angular/toastr'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
constructor(private service:MovieApiService){}


bannerResult:any=[];
trendingMovieResult:any=[];
actionMovieResult:any=[];
adventureMovieResult:any=[];
animationMovieResult:any=[];
comedyMovieResult:any=[];
SciFiMovieResult:any=[];
documentaryMovieResult:any=[];
thrillerMovieResult:any=[];

ngOnInit():void{
  this.bannerData();
  this.trendingData();
  this.actionMovie();
  this.adventureMovie();
  this.animationMovie();
  this.comedyMovie();
  this.scifiMovie();
  this.documentaryMovie();
  this.thrillerMovie();
  
}
bannerData(){
  this.service.bannerApiData()
  .subscribe((response)=>
  {
    console.log(response,'bannerresult#');
    this.bannerResult=response.results;
});
}

trendingData(){
  this.service.trendingMovieApiData()
  .subscribe(result=>{
    console.log(result, 'trendingresult#');  
    this.trendingMovieResult = result.results;

  })
}
actionMovie(){
  this.service.fetchActionMovies()
  .subscribe(res=>{
    console.log(res, 'actionmovies#');
    this.actionMovieResult = res.results;
  });
}

adventureMovie(){
  this.service.fetchAdventureMovies()
  .subscribe(res=>{
    this.adventureMovieResult = res.results;
  });
}

animationMovie(){
  this.service.fetchAnimationMovies()
  .subscribe(res=>{
    this.animationMovieResult=res.results;
  });
}

comedyMovie(){
  this.service.fetchComedyMovies()
  .subscribe(res=>{
    this.comedyMovieResult=res.results;
  });
}

scifiMovie(){
  this.service.fetchScifiMovies()
  .subscribe(res=>{
    this.SciFiMovieResult=res.results;
  });
}
documentaryMovie(){
  this.service.fetchDocumentaryMovies()
  .subscribe(res=>{
    this.documentaryMovieResult=res.results;
  });
}

thrillerMovie(){
this.service.fetchDocumentaryMovies()
.subscribe(res=>{
this.documentaryMovieResult=res.results;
});
}

}

