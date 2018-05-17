import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movies.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  allTheMovies: Array<any>=[];

  constructor(private myService: MovieService,
  private myRouter: Router) { }

  ngOnInit() {
    this.allTheMovies = this.myService.getMovies();
  }

  goToMoviePage(theID){
    // console.log(theID);
    this.myRouter.navigate(['/movies', theID]);
  }

}
