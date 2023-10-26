import { SearchQuery } from "../store/types";
import { queryString } from "../utils/queryString";
import { BASE_URL } from "./common";

export const searchSpecialists = async (params: SearchQuery) => {
  const urlParams = queryString(params);
  const response = await fetch(`${BASE_URL}/search/specialists?${urlParams}`);
  const data = await response.json();
  return {
    persons: data.data.items,
    total: data.data.totalCount,
  };
};
