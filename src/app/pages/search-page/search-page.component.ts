import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from 'src/app/domain/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  public search: string;
  public relatedMovies: Movie[];

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService, private title: Title) { }

  ngOnInit() {
    this.title.setTitle("Search - MoviesCenter")

    this.activatedRoute.queryParams.subscribe(params => {
      this.search = params["search"];
      this.movieService.getMoviesByName(this.search).pipe(this.movieService.handleMovieListRequest()).subscribe(data => {
        this.relatedMovies = data;
      });
    });
  }
}
