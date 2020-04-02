import { Component, OnInit} from '@angular/core';
import { MatDialogRef, MatDialog } from "@angular/material/dialog";
import { TrailerService } from 'src/app/services/trailer.service';

@Component({
  selector: 'app-actor-profile',
  templateUrl: './actor-profile.component.html',
  styleUrls: ['./actor-profile.component.scss']
})
export class ActorProfileComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ActorProfileComponent>, public trailerService:TrailerService, public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  onClickClose(){
    this.dialogRef.close();
  }

}
