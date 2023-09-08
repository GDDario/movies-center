import { Genre } from "./genre.model";

export class Movie {
  private isAdult?: boolean;
  private backdropPath?: string;
  private id?: number;
  private originalLanguage?: string;
  private originalTitle?: string;
  private overview?: string;
  private popularity?: number;
  private posterPath?: string;
  private releaseDate?: Date;
  private title?: string;
  private isVideo?: boolean;
  private voteAverage?: number;
  private voteCount?: number;
  private genres: Genre[];

  constructor({ isAdult, backdropPath, id, originalLanguage, originalTitle,
    overview, popularity, posterPath,
    releaseDate, title, isVideo,
    voteAverage, voteCount }: {
      isAdult?: boolean, backdropPath?: string, id?: number,
      originalLanguage?: string, originalTitle?: string, overview?: string,
      popularity?: number, posterPath?: string, releaseDate?: Date,
      title?: string, isVideo?: boolean, voteAverage?: number, voteCount?: number
    }) {
    this.isAdult = isAdult;
    this.backdropPath = backdropPath;
    this.id = id;
    this.originalLanguage = originalLanguage;
    this.originalTitle = originalTitle;
    this.overview = overview;
    this.popularity = popularity;
    this.posterPath = posterPath;
    this.releaseDate = releaseDate;
    this.title = title;
    this.isVideo = isVideo;
    this.voteAverage = voteAverage;
    this.voteCount = voteCount;
  }

  public getIsAdult(): boolean {
    return this.isAdult!;
  }
  public setIsAdult(isAdult: boolean): void {
    this.isAdult = isAdult;
  }

  public getBackdropPath(): string {
    return this.backdropPath!;
  }
  public setBackdropPath(backgropPath: string): void {
    this.backdropPath = backgropPath;
  }

  public getId(): number {
    return this.id!;
  }
  public setId(id: number): void {
    this.id = id;
  }

  public getOriginalLanguage(): string {
    return this.originalLanguage!;
  }
  public setOriginalLanguage(originalLanguage: string): void {
    this.originalLanguage = originalLanguage;
  }

  public getOriginalTitle(): string {
    return this.originalTitle!;
  }
  public setOriginalTitle(originalTitle: string): void {
    this.originalTitle = originalTitle;
  }

  public getOverview(): string {
    return this.overview!;
  }
  public setOverview(overview: string): void {
    this.overview = overview;
  }

  public getPopularity(): number {
    return this.popularity!;
  }
  public setPopularity(popularity: number): void {
    this.popularity = popularity;
  }

  public getPosterPath(): string {
    return this.posterPath!;
  }
  public setPosterPath(posterPath: string) {
    this.posterPath = posterPath;
  }

  public getReleaseDate(): Date {
    return this.releaseDate!;
  }
  public setReleaseDate(releaseDate: Date) {
    this.releaseDate = releaseDate;
  }

  public getTitle(): string {
    return this.title!;
  }
  public setTitle(title: string): void {
    this.title = title;
  }

  public getIsVideo(): boolean {
    return this.isVideo!;
  }
  public setIsVideo(isVideo: boolean) {
    this.isVideo = isVideo;
  }

  public getVoteAverage(): number {
    return this.voteAverage!;
  }
  public setVoteAverage(voteAverage: number): void {
    this.voteAverage = voteAverage;
  }

  public getVoteCount(): number {
    return this.voteCount!;
  }
  public setVoteCount(voteCount: number) {
    this.voteCount = voteCount;
  }

  public setGenres(genres: Genre[]): void {
    this.genres = genres;
  }
  public getGenres(): Genre[] {
    return this.genres;
  }

  public getAltText(): string {
    return "Movie cover of " + this.getTitle();
  }
  public getRateText(): string {
    return "Rating: " + this.getVoteAverage();
  }
}
