import { Topic } from "../store/types";
import { BASE_URL } from "./common";

export async function getTopics(): Promise<Topic[]> {
  const response = await fetch(`${BASE_URL}/subjects`);
  const res = await response.json();
  return res.data;
}
