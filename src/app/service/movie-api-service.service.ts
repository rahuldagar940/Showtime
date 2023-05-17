import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http : HttpClient) { }

  // baseUrl = "https://api.themoviedb.org/3";
  // apiKey = "4456e567f103242ab6c95e7a6e79ec76";
  baseUrl = "https://api.themoviedb.org/3";
  apiKey = "08cc33bd5ae3a747598ce2ad84376e66";

  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`);
  }
  // bannerApiData(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`);
  // }

  // trandingMovieApiData 
  trendingMovieApiData() : Observable<any>{
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`);
  }
 // searchmovive
 getSearchMovie(data: any): Observable<any> {
  console.log(data, 'movie#');
  return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`);
  }

   // getmoviedatails
   getMovieDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${data}?api_key=${this.apiKey}`)
  }

  // getMovieVideo
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${data}/videos?api_key=${this.apiKey}`)
  }

  // getMovieCast
  getMovieCast(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${data}/credits?api_key=${this.apiKey}`)
  }
  // action 
  fetchActionMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=28`);
  }

  // adventure
  fetchAdventureMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=12`);
  }

  // animation
  fetchAnimationMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=16`);
  }

  // comedy
  fetchComedyMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=35`);
  }

  // documentary
  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=99`);
  }

  // science-fiction:878

  fetchScienceFictionMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=878`);
  }

  // thriller:53
  fetchThrillerMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=53`);
  }

}
