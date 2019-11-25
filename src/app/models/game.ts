import { Genre } from "./genre";
import { Platform } from "./platform";

export class Game {
  id: number;
  slug: string;
  name: string;
  backgroundImage: string;
  rating: number;
  metacritic: number;
  parentPlatforms: Platform[];
  genres: Genre[];
  screenshots: string[];

  constructor(
    id: number,
    slug: string,
    name: string,
    backgroundImage: string,
    rating: number,
    metacritic: number,
    parentPlatforms: Platform[],
    genres: Genre[],
    screenshots: string[]
  ) {
    this.id = id;
    this.slug = slug;
    this.name = name;
    this.backgroundImage = backgroundImage;
    this.rating = rating;
    this.metacritic = metacritic;
    this.parentPlatforms = parentPlatforms;
    this.genres = genres;
    this.screenshots = screenshots;
  }
}
