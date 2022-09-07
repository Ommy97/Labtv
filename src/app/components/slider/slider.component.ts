import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies';
import { MovieService } from 'src/app/services/movie.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/utils/modal/modal.component';
import { Trailer } from 'src/app/models/trailer';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  search!:string
   filmSelezionato!:string
   trailerselezionato!: Trailer[]
  
  trending!:Movies[]
  popular!:Movies[]
  upcoming!:Movies[]

  sliderConfig = {
    slidesToShow:5,
    slidesToScroll:2,
    arrows:true,
    autoplay:false
  };
  
  
  constructor(private apiService : MovieService, private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.apiService.getLatestMovies().subscribe((data)=>{
     this.trending= data.items.slice(0,10)
     console.log(this.trending)
    })

    this.apiService.getPopular().subscribe((data)=> {
      this.popular=data.items.slice(0,10)
      
    })

    this.apiService.getUpcoming().subscribe((data)=> {
      this.upcoming=data.items.slice(0,10)
    })
  }

  visualizza(m:Movies){
    
     
     
    this.dialogRef.open(PopupComponent, {
      data:{
        title: m.title,
        year:m.year,
        crew:m.crew,
        rating:m.imDbRating,
        trailer: this.trailerselezionato
      },
      disableClose:true
    })
    this.filmSelezionato=m.id
     fetch(`${'https://imdb-api.com/en/API/YoutubeTrailer/'}${'k_4v96g395/'}${this.filmSelezionato}`).then(res=> res.json())
     .then(res =>{ this.trailerselezionato=res.videoId
      console.log(this.trailerselezionato)
     })
  }

 
   



}
