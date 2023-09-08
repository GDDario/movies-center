import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Movie } from 'src/app/domain/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public topRatedMovies: Movie[];
  public popularMovies: Movie[];
  public data: any;

  constructor(private movieService: MovieService, private title: Title) { }

  public ngOnInit(): void {
    this.title.setTitle("Home - MoviesCenter")

    const topRatedMovies = [new Movie({ id: 1, title: "Macha e o Usso" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" })];
    this.topRatedMovies = topRatedMovies;

    const suggestedMovies = [new Movie({ id: 1, title: "Macha e o Usso" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }),
    new Movie({ id: 1, title: "Macha e o Usso" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }),
    new Movie({ id: 1, title: "Macha e o Usso" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" }), new Movie({ id: 2, title: "Os três porquinhos" })];
    this.popularMovies = suggestedMovies;

    this.movieService.getTopRatedMovies().pipe(this.movieService.handleMovieListRequest()).subscribe(data => {
      this.topRatedMovies = data;
    });
    this.movieService.getPopularMovies().pipe(this.movieService.handleMovieListRequest()).subscribe(data => {
      this.popularMovies = data;
    })
  }


}
