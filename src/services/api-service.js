import config from "../config";

const ApiService = {
  /**
   * Fetches real time stock prices from the server.
   * @input a list of symbols
   */
  getAllSymbols() {
    return fetch(`${config.API_ENDPOINT}/stocks`)
      .then(res => (!res.ok ? res.json() : res.json()))
      .then(json => {
        console.log(json);
        return json;
      });
  },
  /**
   * Adds a new company's data to list, if there are less than 120 companies
   * @input String symbol
   */
  requestCompany({ symbol }) {
    return fetch(`${config.API_ENDPOINT}/stocks`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        symbol
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  /**
   * Fetches the time series of the specified symbol from the server.
   * @input String symbol
   */
  getTimeSeries({ symbol }) {
    return fetch(`${config.API_ENDPOINT}/time-series/${symbol}`)
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      )
      .then(json => {
        console.log(json);
        return json;
      });
  }
};

export default ApiService;
