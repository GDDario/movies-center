import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map } from 'rxjs';
import { Genre } from 'src/app/domain/genre.model';

import { Movie } from 'src/app/domain/movie.model';
import { MovieResponse } from 'src/app/interfaces/movie-response.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  public movie: Movie;
  public relatedMovies: Movie[];

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.movie = new Movie({});

    this.activatedRoute.params.subscribe((params: Params) => {
      this.movie.setId(+params["id"]);
      this.movieService.getMovieById(this.movie.getId()).pipe(map((data: MovieResponse) => {
        let genreList: Genre[] = [];
        for (let i = 0; i < data.genres!.length; i++) {
          genreList.push(new Genre({ id: data.genres![i].id, name: data.genres![i].name }));
        }
        let movie: Movie = new Movie({ id: data.id, title: data.title, voteAverage: data.vote_average, voteCount: data.vote_count, popularity: data.popularity, releaseDate: data.release_date, overview: data.overview, backdropPath: data.backdrop_path });
        movie.setGenres(genreList);
        return movie;
      })).subscribe(data => {
        this.movie = data;
      });

      this.movieService.getRelatedMovies(this.movie.getId()).pipe(this.movieService.handleMovieListRequest()).subscribe(data => {
        this.relatedMovies = data;
      });
    });
  }
}
