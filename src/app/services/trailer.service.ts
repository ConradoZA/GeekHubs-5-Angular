import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrailerService {
public trailer:Array<[]>=[];
public trailerId:string="";
public key:string="";

  constructor(public httpClient:HttpClient) { }

getMovieId(movieId){
this.trailerId=movieId;
console.log(this.trailerId)
  }

goToYouTube(){
  this.key="";
  this.trailer=[];
  this.httpClient.get(`https://api.themoviedb.org/3/movie/${this.trailerId}/videos?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES`)
  .subscribe(res=>{this.trailer=res['results'],
    this.key=this.trailer[0]['key'],
    window.open(`https://www.youtube.com/watch?v=${this.key}`, '_blank');
  })
}

}
