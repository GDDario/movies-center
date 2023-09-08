import { Component } from '@angular/core';
import { Movie } from './domain/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-center';
  constructor() {

  }
}
