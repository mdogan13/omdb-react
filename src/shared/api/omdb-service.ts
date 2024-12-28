import http from "./http-service";

export const searchMedia:any = (payload: {
  title: string;
  page: number;
  year?: string;
  type: string;
}) => {
  const queryString = `?s=${payload.title}&type=${payload.type}&page=${payload.page}`;
  if (payload.year) {
    queryString.concat(`&y=${payload.year}`);
  }
  return http.get(`/${queryString}`);
};
