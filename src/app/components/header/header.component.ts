import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 public color:string="primary";
 public color2:string="primary";
 public color3:string="primary";
  constructor(public apiService:ApiService) {
  }

  getSearch(event){
    if(event.key==='Enter'){
      this.apiService.getSearch(event.target.value)
    }
  }
  getTop(){
    this.apiService.getTop()
  }
  getPopular(){
    this.apiService.getPopular()
  }
  getNow(){
    this.apiService.getNow()
  }

  ngOnInit(): void {}
}
