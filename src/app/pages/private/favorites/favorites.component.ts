import { Component, OnInit} from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  moviesList: Movie[] = [];

  constructor(
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.getMovies();
  }
  
  getMovies() {
    this.moviesList = this.moviesService.getMoviesList();
  }

  reloadMovies(reload: boolean) {
    if (reload) {
      this.getMovies();
    } 
  }

}
