import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { TrailerService } from 'src/app/services/trailer.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

constructor(public apiService:ApiService, public dialog:MatDialog, public trailerService:TrailerService) { }

public page_size:number=10;
public page_number:number=1;
public pageSizeOptions=[5,10,20,50];


handlePage(event:PageEvent){
  this.page_size=event.pageSize
  this.page_number=event.pageIndex+1
}
openModal(movieId):void{
this.apiService.getDetails(movieId)
this.trailerService.getMovieId(movieId)
this.trailerService.getTrailer()
this.dialog.open(ModalComponent).afterClosed().subscribe(res=>{if(res){this.apiService.getRelated(movieId)}})
}
  ngOnInit(): void {}
}
