export class Genre {
  private id: number;
  private name: string;
  private backdropPath: string;

  constructor({ id, name, backdropPath }: { id: number, name?: string, backdropPath?: string }) {
    this.id = id;
    this.name = name!;
    this.backdropPath = backdropPath!;
  }

  public getId(): number | undefined {
    return this.id;
  }
  public setId(id: number): void {
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }
  public setName(name: string): void {
    this.name = name;
  }

  public getBackdropPath(): string {
    return this.backdropPath;
  }
  public setBackdropPath(backropPath: string): void {
    this.backdropPath = backropPath;
  }
}
