import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  getMovies(): Movie[] {
    return localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')!) : [];
  }

  setMovies(movies: Movie[]): void {
    localStorage.setItem('movies', JSON.stringify(movies));
  }


}
