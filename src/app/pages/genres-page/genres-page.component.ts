import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Genre } from 'src/app/domain/genre.model';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-genres-page',
  templateUrl: './genres-page.component.html',
  styleUrls: ['./genres-page.component.css']
})
export class GenresPageComponent implements OnInit {
  public genresList: Genre[];

  constructor(private genreService: GenreService, private title: Title) { }

  public ngOnInit(): void {
    this.title.setTitle("Genres - MoviesCenter")
    const genresList = this.genreService.genreList;
    this.genresList = genresList;
  }
}
