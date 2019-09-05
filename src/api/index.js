import config from "./config";

function checkResponse(response) {
  if (response.ok) {
    return response;
  } else {
    throw new Error(response.statusText);
  }
}

function getAoEResource(resource) {
  return fetch(
    `${config.noCorsURL}${config.baseURL}${resource}`,
    config.options
  )
    .then(checkResponse)
    .then(res => res.json());
}

export default getAoEResource;
