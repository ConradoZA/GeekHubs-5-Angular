import { Component, OnInit} from '@angular/core';
import { MatDialogRef, MatDialog } from "@angular/material/dialog";
import { ApiService } from 'src/app/services/api.service';
import { TrailerService } from 'src/app/services/trailer.service';
import { ActorProfileComponent } from '../actor-profile/actor-profile.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor(public apiService:ApiService, public dialogRef:MatDialogRef<ModalComponent>, public trailerService:TrailerService, public dialog:MatDialog) { }

public cast:Array<{}>=[];
public toggleCastButton:boolean=true;

  ngOnInit(): void { }

onClickClose():void{
  this.dialogRef.close()
}
toggleCast(){
  this.cast=[];
  if(this.toggleCastButton){
    this.cast=this.apiService.detail['credits']['cast'];
    this.toggleCastButton=false;
  }
  else{this.toggleCastButton=true}
}
onClickGotoVideo(){
this.trailerService.goToYouTube();
}

showBio(actorId):void{
  this.trailerService.getActor(actorId),
  this.dialog.open(ActorProfileComponent)
  }

}
