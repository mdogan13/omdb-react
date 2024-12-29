export interface Media {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string | "N/A";
  Writer: string | "N/A";
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string | "N/A";
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Metascore: number;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: "movie" | "series" | "episode";
  totalSeasons?: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string | "N/A";
  Website?: string | "N/A";
  Response: "True" | "False";
}

export interface MediaSearchResult {
  Title: string;
  Year: string;
  imdbID: string;
  Type: "movie" | "series" | "episode";
  Poster: string;
}
