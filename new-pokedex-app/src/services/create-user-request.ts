import axios from "axios";
import { headers } from "./requests-headers";
import { SERVICE_URL } from "../config/service/env";

interface CreateUserRequestData {
  name: String;
  lastName: String;
  user: String;
  password: String;
}

const controlResponse = (response?: string[]) => {
  return response
    ? `{
    ${response.map(
      (element: string) => `
      ${element}      
    `,
    )}
  }   
  `
    : `{
      id
      name
      lastName
      user
      password
  }
  `;
};

export const createUserRequest = async (user: CreateUserRequestData, response?: string[]) => {
  console.log(user);
  return axios({
    method: "post",
    headers: headers,
    url: `${SERVICE_URL}/graphql`,
    data: {
      query: `
        mutation {
          createUser(input:{
            name: "${user.name}",
            lastName: "${user.lastName}",
            user: "${user.user}",
            password: "${user.password}"

          }) ${controlResponse(response)}
        }
      `,
    },
  });
};
