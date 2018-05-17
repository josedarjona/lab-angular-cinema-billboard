import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  theMovie: any = {};

  
  constructor(private route: ActivatedRoute, 
  private myService: MovieService) { }

  ngOnInit() {
      this.route.params
      .subscribe((params) => {
        const theId = Number(params['id']);
        this.theMovie = this.myService.getMovie(theId);
        console.log(this.theMovie)
      });

  }




}
