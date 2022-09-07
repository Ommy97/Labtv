import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movies } from '../models/movies';

const enum endpoint{
  trending='/Top250Movies/',
  popular='/MostPopularMovies/',
  upcoming='/MostPopularTVs/',
 
  
  
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private URL= 'https://imdb-api.com/en/API'
  private api_key = environment.api

  constructor(private http: HttpClient) { }

    getLatestMovies(): Observable<any> {
      return this.http.get(`${this.URL}${endpoint.trending}${this.api_key}`);
    }
    getPopular(): Observable<any> {
      return this.http.get(`${this.URL}${endpoint.popular }${this.api_key}`);
    }
     getUpcoming(): Observable<any> {
      return this.http.get(`${this.URL}${endpoint.upcoming}${this.api_key}`);
    }
}
