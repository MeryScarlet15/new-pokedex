import axios from "axios";
import { headers } from "./requests-headers";
import { SERVICE_URL } from "../config/service/env";

interface UserAuthRequestData {
  email: String;
  password: String;
}

export const userAuthRequest = async (data: UserAuthRequestData) => {
  console.log(data);
  return axios({
    method: "post",
    headers: headers,
    url: `${SERVICE_URL}/graphql`,
    data: {
      query: `
        mutation {
          userAuth(input:{
            user:"${data.email}"
            password:"${data.password}"
          }) {
            token
          }
        } 
      `,
    },
  });
};
