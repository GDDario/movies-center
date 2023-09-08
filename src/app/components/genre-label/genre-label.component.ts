import { Component, Input } from '@angular/core';
import { Genre } from 'src/app/domain/genre.model';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-genre-label',
  templateUrl: './genre-label.component.html',
  styleUrls: ['./genre-label.component.css']
})
export class GenreLabelComponent {
  @Input({required: true}) public genre: Genre;

  constructor(private genreService: GenreService) { }

  public getBackgroundColor(): string {
    return this.genreService.getColorByGenre(this.genre.getName());
  }
}
