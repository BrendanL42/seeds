import { API_URI } from "@env";

export const mongoDBRequest = async (url, method, data) => {
  return fetch(`${API_URI}/${url}`, {
    method: `${method}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
