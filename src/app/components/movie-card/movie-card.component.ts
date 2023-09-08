import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/domain/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input({ required: true }) public movie: Movie;

  constructor(private router: Router) { }

  public navigate(): void {
    this.router.navigate(['/movie', this.movie.getId()])
  }
}
