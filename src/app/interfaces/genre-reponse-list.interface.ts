import { Genre } from "../domain/genre.model";

export interface GenreResponseList {
  genres: Array<{id: number, name: string}>;
}
