import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Movies } from 'src/app/models/movies';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class PopupComponent implements OnInit {
   
  title!:string
  year!:string
  crew!:string
  rating!:string
  trailer!:any

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private _sanitizer: DomSanitizer) { 
    this.title=data.title,
    this.year=data.year,
    this.crew=data.crew,
    this.rating=data.rating
    this.trailer=this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${data.trailer}`)

  }

close(){
  this.trailer=""
}

  ngOnInit(): void {
  }

}
