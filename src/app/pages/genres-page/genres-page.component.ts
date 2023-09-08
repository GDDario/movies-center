import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/domain/genre.model';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-genres-page',
  templateUrl: './genres-page.component.html',
  styleUrls: ['./genres-page.component.css']
})
export class GenresPageComponent implements OnInit {
  public genresList: Genre[];

  constructor(private genreService: GenreService) { }

  public ngOnInit(): void {
    const genresList = this.genreService.genreList;
    this.genresList = genresList;
  }
}
