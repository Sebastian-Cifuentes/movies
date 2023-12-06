import { Component, Input, OnInit, Signal, computed, signal } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-genders',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  constructor(
    private moviesService: MoviesService
  ) {}

  genre_value = signal('');
  movies: Signal<Movie[]> = computed(() => this.moviesService.getMovieByGenre(this.genre_value()));

  @Input() public set genre(genre: string) {
    this.genre_value.set(genre);
  };

  ngOnInit(): void {
  }

}

