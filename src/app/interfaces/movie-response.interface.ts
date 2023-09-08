export interface MovieResponse {
  is_adult?: boolean;
  backdrop_path?: string;
  genres?: {id: number, name: string}[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: Date;
  title?: string;
  is_video?: boolean;
  vote_average?: number;
  vote_count?: number;
}
