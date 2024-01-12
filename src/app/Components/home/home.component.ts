import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/Services/movie-api.service';
// import { ToastrModule} from '.angular/toastr'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
constructor(private movieservice:MovieApiService){}


bannerResult:any=[];

ngOnInit():void{
}
bannerData(){
  this.movieservice.bannerApiData()
  .subscribe((response)=>
  {
console.log(response,'bannerresult#');
this.bannerResult=response.results;
},

  );
}
}
