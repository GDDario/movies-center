import { Component, Input } from '@angular/core';

import { Genre } from 'src/app/domain/genre.model';

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.css']
})
export class GenreCardComponent {
  @Input({required: true}) public genre: Genre;

  public getAltText(): string {
    return "Comedy cover";
  }
}
