import { Component, Input, OnInit, Signal, computed, signal } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { StorageService } from '../../../services/storage.service';
import { sortByTitle, sortByDate } from '../../../utils';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  before_title_value = '';
  before_release_date_value = '';

  constructor(
    private moviesService: MoviesService
  ) {}

  title_value = signal('');
  release_date_value = signal('');

  @Input() private set title(title: string) {
    this.title_value.set(title);
  };
  @Input() private set releaseDate(releaseDate: string) {
    this.release_date_value.set(releaseDate);
  };
  private _movies = signal<Movie[]>([]);
  
  movies: Signal<Movie[]> = computed(() => {
    return this.sort(this._movies(), this.title_value(), this.release_date_value()) || this.moviesService.getMovies
  });

  async ngOnInit() {
    await this.moviesService.getMoviesApi();
    this._movies.set(this.moviesService.getMovies);
  }


  sort(movies: Movie[], title: string, release_date: string): Movie[] {
    if (title !== this.before_title_value) {
      movies = sortByTitle(movies, title);
    } else {
      movies = sortByDate(movies, release_date);
    }
    
    this.before_title_value = title;
    this.before_release_date_value = release_date;

    return movies;
  }
}
