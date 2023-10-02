import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  ParseIntPipe,
  Body,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { moviesdto } from './dto/movies.dto';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}
  @Get()
  getMovies() {
    return this.moviesService.getMovies();
  }
  @Get('/:id')
  getOneMovie(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.getOneMovie(id);
  }
  @Post()
  createMovie(@Body() movie: moviesdto) {
    return this.moviesService.createMovie(movie);
  }
  @Put('/:id')
  updateMovie(@Param('id', ParseIntPipe) id: number, movieData: moviesdto) {
    return this.moviesService.updateMovies(id, movieData);
  }
  @Delete('/:id')
  deleteMovie(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.deleteMvoie(id);
  }
}
