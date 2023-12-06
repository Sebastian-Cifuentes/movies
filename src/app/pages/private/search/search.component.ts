import { Component, Input, Signal, computed, signal } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(
    private moviesService: MoviesService
  ) {
  }
  
  search_value = signal('');
  movies: Signal<Movie[]> = computed(() => this.moviesService.search(this.search_value()));

  @Input() public set search(search: string) {
    this.search_value.set(search);
  };

}
