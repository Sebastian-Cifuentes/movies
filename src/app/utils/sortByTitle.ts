import { FilterTypes } from "../enum/FilterType";
import { Movie } from "../interfaces/movie";

export const sortByTitle = (movies: Movie[], title: string) => {
    if (title === '' || !title) movies;
    movies = movies.sort((m1, m2) => {
        const titleLowerCase1 = m1.title?.toLocaleLowerCase();
        const titleLowerCase2 = m2.title?.toLocaleLowerCase();
        let sort = 0;
        if (title === FilterTypes.ASC) {
            return (titleLowerCase1! > titleLowerCase2!) ? 1 : (titleLowerCase1! < titleLowerCase2!) ? -1 : 0
        } else {
            return (titleLowerCase1! < titleLowerCase2!) ? 1 : (titleLowerCase1! > titleLowerCase2!) ? -1 : 0
        }
    });
    return movies;
  }