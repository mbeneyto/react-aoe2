export default {
  baseURL: 'https://age-of-empires-2-api.herokuapp.com/api/v1/',
  noCorsURL: 'https://cors-anywhere.herokuapp.com/', // https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors
  options: {
    headers: {
      Accept: 'application/json'
    }
  }
};
