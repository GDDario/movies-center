import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from 'src/app/domain/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search-genre-page',
  templateUrl: './search-genre-page.component.html',
  styleUrls: ['./search-genre-page.component.css']
})
export class SearchGenrePageComponent implements OnInit {
  private genreId: number;
  public genreName: string;
  public foundMovies: Movie[];

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  public ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.genreName = params["genreName"];
    });
    this.activatedRoute.params.subscribe(params => {
      this.genreId = params["id"];
    });

    this.movieService.getMoviesByGenreId(this.genreId).pipe(this.movieService.handleMovieListRequest()).subscribe(data => {
      this.foundMovies = data;
    });
  }
}
