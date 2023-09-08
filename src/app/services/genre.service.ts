import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Genre } from "../domain/genre.model";
import { GenreResponseList } from "../interfaces/genre-reponse-list.interface";

// Get a random movie id and get the background of it to use as background for a genre
@Injectable({ providedIn: "root" })
export class GenreService {
  public genreList: Genre[] = [
    new Genre({
      id: 28,
      name: "Action",
      backdropPath: "action.jpg"
    }),
    new Genre({
      id: 12,
      name: "Adventure",
      backdropPath: "adventure.jpg"
    }),
    new Genre({
      id: 16,
      name: "Animation",
      backdropPath: "animation.jpg"
    }),
    new Genre({
      id: 35,
      name: "Comedy",
      backdropPath: "comedy.jpg"
    }),
    new Genre({
      id: 80,
      name: "Crime",
      backdropPath: "crime.jpg"
    }),
    new Genre({
      id: 99,
      name: "Documentary",
      backdropPath: "documentary.jpg"
    }),
    new Genre({
      id: 18,
      name: "Drama",
      backdropPath: "drama.jpg"
    }),
    new Genre({
      id: 10751,
      name: "Family",
      backdropPath: "family.jpg"
    }),
    new Genre({
      id: 14,
      name: "Fantasy",
      backdropPath: "fantasy.jpg"
    }),
    new Genre({
      id: 36,
      name: "History",
      backdropPath: "history.jpg"
    }),
    new Genre({
      id: 27,
      name: "Horror",
      backdropPath: "horror.jpg"
    }),
    new Genre({
      id: 10402,
      name: "Music",
      backdropPath: "music.jpg"
    }),
    new Genre({
      id: 9648,
      name: "Mystery",
      backdropPath: "mystery.jpg"
    }),
    new Genre({
      id: 10749,
      name: "Romance",
      backdropPath: "romance.jpg"
    }),
    new Genre({
      id: 878,
      name: "Science Fiction",
      backdropPath: "science-fiction.jpg"
    }),
    new Genre({
      id: 10770,
      name: "TV Movie",
      backdropPath: "tv-movie.jpg"
    }),
    new Genre({
      id: 53,
      name: "Thriller",
      backdropPath: "thriller.jpg"
    }),
    new Genre({
      id: 10752,
      name: "War",
      backdropPath: "war.jpg"
    }),
    new Genre({
      id: 37,
      name: "Western",
      backdropPath: "western.jpg"
    })];

  constructor(private httpClient: HttpClient) { }

  public getColorByGenre(genre: string): string {
    switch (genre) {
      case "Action":
        return "#FF5733";
      case "Adventure":
        return "#33FF57";
      case "Animation":
        return "#5733FF";
      case "Comedy":
        return "#FF9933";
      case "Crime":
        return "#3366FF";
      case "Documentary":
        return "#66FF33";
      case "Drama":
        return "#FF3366";
      case "Family":
        return "#FFCC33";
      case "Fantasy":
        return "#FF33FF";
      case "History":
        return "#33FF99";
      case "Horror":
        return "#9933FF";
      case "Music":
        return "#FF3399";
      case "Mystery":
        return "#33FFCC";
      case "Romance":
        return "#CC33FF";
      case "Science Fiction":
        return "#FFCC33";
      case "TV Movie":
        return "#CCFF33";
      case "Thriller":
        return "#33CCFF";
      case "War":
        return "#FF33CC";
      case "Western":
        return "#33FF66";
      default:
        return "#000";
    }
  }

  public getGenreNameList(): string[] {
    let genreList: string[] = [];
    this.httpClient.get<GenreResponseList>("https://api.themoviedb.org/3/genre/movie/list?language=en").subscribe((data: GenreResponseList) => {
      for (let i = 0; i < data.genres.length; i++) {
        genreList.push(data.genres[i].name);
      }
    });
    return genreList;
  }
}
