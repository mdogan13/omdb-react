import http from "./http-service";

export const searchMedia: any = (payload: {
  title: string;
  page: number;
  year?: string;
  type: string;
  season?: number;
  episode?: number;
}) => {
  const queryParams: Record<string, string | number> = {
    s: payload.title,
    page: payload.page,
  };

  if (payload.year) queryParams.y = payload.year;
  if (payload.season) queryParams.Season = payload.season;
  if (payload.episode) queryParams.Episode = payload.episode;

  if (payload.type !== "episode") queryParams.type = payload.type;

  const queryString = new URLSearchParams(queryParams as Record<string, string>).toString();

  return http.get(`/?${queryString}`);
};


export const getMediaById: any = (id: string) => {
  return http.get(`/?i=${id}&plot=full`);
};
