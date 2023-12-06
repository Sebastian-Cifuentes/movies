import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private api_data = '../../assets/data/data.json';

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  private movies: Movie[] = this.storageService.getMovies();

  get getMovies(): Movie[] {
    return this.movies;
  }

  set setMovies(movies: Movie[]) {
    this.movies = movies;
  }

  async getMoviesApi() {
    const movies = await lastValueFrom<Movie[]>(this.http.get<Movie[]>(this.api_data));
    const savedMovies = [...this.getMovies]
    savedMovies.forEach((sm) => {
      const index = movies.findIndex(m => m.id === sm.id);
      if (index !== -1) {
        movies.splice(index, 1, sm);
      }
    })
    this.setMovies = movies;
    this.storageService.setMovies(this.getMovies);
  }

  getMovieById(id: number): Movie {
    return this.getMovies.find(m => m.id === id)!;
  }

  getMovieByGenre(genre: string): Movie[] {
    const movies = this.getMovies.map(m => {
      const genre = m.genre?.map(g => g.toLowerCase());
      return {...m, genre}
    });
    return movies.filter(m => m.genre?.includes(genre.toLowerCase()))!;
  }

  getMoviesList(): Movie[] {
    return this.getMovies.filter(m => m.in_watch_list);
  }

  search(value: string): Movie[] {
    const movies = this.getMovies.map(m => ({...m, title: m.title?.toLowerCase()}))
    let filterMovies = movies.filter(m => m.title?.includes(value));
    filterMovies = filterMovies.map(m => {
      const movie = this.getMovies.find(gm => gm.id === m.id);
      return {...m, ...movie};
    });
    return filterMovies;
  }
}
