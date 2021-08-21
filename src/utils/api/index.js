import axios from "axios";

class Request {
  constructor() {
    this.baseUrl = "https://api.bitpin.ir/v1/mkt/markets";
  }

  get(url) {
    return this.send({ method: "GET", url });
  }

  //POST *Parameters:url:'String'*
  post(url, data) {
    return this.send({ method: "POST", url, data });
  }

  //PATCH *Parameters:url: 'String'
  patch(url, data) {
    return this.send({ method: "PATCH", url, data });
  }

  send(info) {
    return new Promise(async (resolve, reject) => {
      const { method, url, data } = info;
      let response = null;

      if (method === "GET") {
        response = await axios.get(this.baseUrl + url);
      } else if (method === "POST") {
        response = await axios.post(this.baseUrl + url, data);
      } else if (method === "PATCh") {
        response = await axios.patch(this.baseUrl + url, data);
      }
      if (!response) {
        reject("API did not response");
      }
      resolve(response.data);
    });
  }
}

export const request = new Request();
