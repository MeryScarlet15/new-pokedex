import axios from "axios";
import { headers } from "./requests-headers";
import { SERVICE_URL } from "../config/service/env";

export const getPokemonRequest = async () => {
  return axios({
    method: "post",
    headers: headers,
    url: `${SERVICE_URL}/graphql`,
    data: {
      query: `
        {
          getPokemon {
            number
            name
            sprite
          }
        }
      `,
    },
  });
};
