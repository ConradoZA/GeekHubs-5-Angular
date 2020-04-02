import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrailerService {
public trailer:Array<[]>=[];
public trailerId:string="";
public key:string="";
public trailerExists:boolean=false;
public actorId:string="";
public actorBio:object={};

  constructor(public httpClient:HttpClient) { }

getMovieId(movieId){
this.trailerId=movieId;
  }

getTrailer(){
  this.key="";
  this.trailer=[];
  this.httpClient.get(`https://api.themoviedb.org/3/movie/${this.trailerId}/videos?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES`)
  .subscribe(res=>{this.trailer=res['results']
    if(this.trailer.length>0){this.trailerExists=true; this.key=this.trailer[0]['key']}
    else{this.trailerExists=false}
  })
  
}
getActor(id){
this.actorId="";
this.actorId=id;
this.httpClient.get(`https://api.themoviedb.org/3/person/${this.actorId}?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES`)
.subscribe(res=>this.actorBio=res)
}
goToYouTube(){
  window.open(`https://www.youtube.com/watch?v=${this.key}`, '_blank');
}

}
