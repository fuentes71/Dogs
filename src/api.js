export const API_URL = "https://dogsapi.origamid.dev/json";

export function TOKEN_POST(body) {
  return {
    url: API_URL + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      Headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}
export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      Headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "POST",
      Headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}
