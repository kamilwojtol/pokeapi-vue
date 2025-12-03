import { HttpMethod } from "../interfaces/IFetchService";

export async function getData(
  endpoint: string,
  method: HttpMethod = HttpMethod.GET
) {
  try {
    const data = await fetch(endpoint, {
      method: method,
    });
    const json = await data.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}
