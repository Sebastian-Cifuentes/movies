import { FilterTypes } from "../enum/FilterType";
import { Movie } from "../interfaces/movie";

export const sortByDate = (movies: Movie[], releaseDate: string) => {
    if (releaseDate === '' || !releaseDate) return movies;
    movies = movies.sort((m1, m2) => {
        const date1 = new Date(m1.released_date!);
        const date2 = new Date(m2.released_date!);
        if (releaseDate === FilterTypes.ASC) {
            return (date1! > date2!) ? 1 : (date1! < date2!) ? -1 : 0
        } else {
            return (date1! < date2!) ? 1 : (date1! > date2!) ? -1 : 0
        }
    });
    return movies;
  }