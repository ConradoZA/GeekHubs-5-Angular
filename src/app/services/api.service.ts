import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
public movies:object[]=[];
public detail:object={};
public trailer:object={};

  constructor(public httpClient:HttpClient) { }

  getSearch(busqueda):void{
    this.movies=[];
    this.httpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&query=${busqueda}`)
      .subscribe(res => {
        this.movies.push(...res['results']);
        if(res['total_pages']>10){res['total_pages']=10}
        for (let i = 2; i <= res['total_pages'];i++) {
           this.httpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&query=${busqueda}&page=${i}`)
           .subscribe(res => {
            this.movies.push(...res['results'])
          })
        }
      })
  }
  getTop():void{
    this.movies=[];
    this.httpClient.get('https://api.themoviedb.org/3/movie/top_rated?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES')
      .subscribe(res => {
        this.movies.push(...res['results']);
        if(res['total_pages']>10){res['total_pages']=10}
        for (let i = 2; i <= res['total_pages'];i++) {
           this.httpClient.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&page=${i}`)
           .subscribe(res => {
            this.movies.push(...res['results'])
          })
        }
      })
  }
  getPopular():void{
    this.movies=[];
    this.httpClient.get('https://api.themoviedb.org/3/movie/popular?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES')
      .subscribe(res => {
        this.movies.push(...res['results']);
        if(res['total_pages']>10){res['total_pages']=10}
        for (let i = 2; i <= res['total_pages'];i++) {
           this.httpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&page=${i}`)
           .subscribe(res => {
            this.movies.push(...res['results'])
          })
        }
      })
  }
  getNow():void{
    this.movies=[];
    this.httpClient.get('https://api.themoviedb.org/3/movie/now_playing?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&region=ES')
      .subscribe(res => {
        this.movies.push(...res['results']);
        if(res['total_pages']>10){res['total_pages']=10}
        for (let i = 2; i <= res['total_pages'];i++) {
           this.httpClient.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&region=ES&page=${i}`)
           .subscribe(res => {
            this.movies.push(...res['results'])
          })
        }
      })
  }
  getDetails(movie_id):void{
    this.detail={};
    this.httpClient.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=cea68b520beecac6718820e4ac576c3a&append_to_response=credits&language=es-ES`)
    .subscribe(res=>this.detail=res)
  }
  getRelated(movie_id):void{
    this.movies=[];
    this.httpClient.get(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES`)
    .subscribe(res => {
      this.movies.push(...res['results']);
      if(res['total_pages']>10){res['total_pages']=10}
      for (let i = 2; i <= res['total_pages'];i++) {
         this.httpClient.get(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&page=${i}`)
         .subscribe(res => {
          this.movies.push(...res['results'])
        })
      }
    })
  }

}