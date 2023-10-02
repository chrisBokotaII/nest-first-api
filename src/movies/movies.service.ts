import { Injectable } from '@nestjs/common';
import { moviesdto } from './dto/movies.dto';
import { moviesData } from 'src/db/movie.db';

@Injectable()
export class MoviesService {
  getMovies(): moviesdto[] {
    const data = moviesData;
    return data;
  }

  getOneMovie(id: number): moviesdto[] {
    const data = moviesData;
    return data.filter((movie) => movie.id === id);
  }
  updateMovies(id: number, movieData: moviesdto): moviesdto {
    const data = moviesData;
    const movie = data.find((item) => item.id === id);
    Object.assign(movie, movieData);
    return movie;
  }

  createMovie(movie: moviesdto): moviesdto {
    const data = moviesData;
    data.push(movie);
    return movie;
  }
  deleteMvoie(id: number): boolean {
    const data = moviesData;
    const movie = data.find((item) => item.id === id);
    if (movie) {
      data.splice(data.indexOf(movie), 1);
      return true;
    }
    return false;
  }
}
