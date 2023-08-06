export interface MovieTypes {
  title: string;
  episode_id: number | null;
  opening_crawl: string | null;
  director: string | null;
  producer: string | null;
  release_date: string | null;
  characters: string[] | null;
  planets: string[] | null;
  starships: string[] | null;
  vehicals: string[] | null;
  species: string[] | null;
}

export interface FavoriteState {
  favorite: MovieTypes[];
}

export interface MovieState {
  movies: MovieTypes[];
}
