import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent {

  @Input() movie: Movie;
  @Output() onchangelist: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private storageService: StorageService,
    private router: Router
  ) {

  }

  goToMovie(id: number) {
    this.router.navigateByUrl(`/movie/${id}`);
  }

  handelWatchList(id: number) {
    this.movie.in_watch_list = !this.movie.in_watch_list;
    let movies = this.storageService.getMovies();
    movies = movies.map(m => {
      if (m.id === id) {
        m.in_watch_list = !m.in_watch_list;
      }
      return m
    })
    this.storageService.setMovies([...movies]);
    this.onchangelist.emit(true);
  }


}
