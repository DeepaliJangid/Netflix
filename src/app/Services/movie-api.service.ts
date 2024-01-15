import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http:HttpClient) { }

  baseUrl='https://api.themoviedb.org/3';
 apikey= "08cc33bd5ae3a747598ce2ad84376e66";

 bannerApiData():Observable<any>
 {
  return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apikey}`)
 }


 trendingMovieApiData():Observable<any>
 {
  return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apikey}`);
 }

 getsearchMovie(data:any):Observable<any>
 {
return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apikey}&query=${data.query}`);
 }

 getmovieDetails(data:any):Observable<any>
 {
  return this.http.get(`${this.baseUrl}/movie/{data}?api_key=${this.apikey}`);
 }

}