import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, OperatorFunction, map } from "rxjs";

import { MovieResponseList } from "../interfaces/movie-response-list.interface";
import { Movie } from "../domain/movie.model";
import { MovieResponse } from "../interfaces/movie-response.interface";

@Injectable({providedIn: "root"})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  public getTopRatedMovies(): Observable<MovieResponseList> {
    return this.httpClient.get<MovieResponseList>("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1");
  }

  public getPopularMovies(): Observable<MovieResponseList> {
    return this.httpClient.get<MovieResponseList>("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1");
  }

  public getRelatedMovies(id: number): Observable<MovieResponseList> {
    return this.httpClient.get<MovieResponseList>(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`);
  }

  public getMovieById(id: number): Observable<MovieResponse> {
    return this.httpClient.get<MovieResponse>(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);
  }

  public getMoviesByName(name: string): Observable<MovieResponseList> {
    return this.httpClient.get<MovieResponseList>(`https://api.themoviedb.org/3/search/movie?query=${name}`);
  }

  public getMoviesByGenreId(genreId: number): Observable<MovieResponseList> {
    return this.httpClient.get<MovieResponseList>(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`);
  }

  public handleMovieListRequest(): OperatorFunction<MovieResponseList, Movie[]> {
    return map((data: MovieResponseList) => {
      let movies: Movie[] = [];

      for(let i = 0; i < data.results.length; i++) {
        let index: any = data.results[i];
        movies.push(new Movie({id: index.id, title: index.title, backdropPath: index.backdrop_path, voteAverage: index.vote_average}));
      }

      return movies;
    });
  }
}
