const { default: Axios } = require('axios');

class Faceit {
  constructor(apiKey) {
    this.apiUrl = "https://open.faceit.com/data/v4/";
    this.apiKey = apiKey;
  }
  getPlayerStats = async (nickname, options) => {
    if (!options) this.url = `players?nickname=${nickname}`
    return new Promise((resolve, reject) => {
      try {
        const response = this.getRequest(this.url);
        resolve(response);
      } catch (error) {
        reject(error)
      }
    })
  }
  getRequest = (url) => {
    return new Promise(async (resolve, reject) => {
      const apiUrl = this.apiUrl
      const apiKey = this.apiKey;
      try {
        const response = await Axios.get(apiUrl + url, {
          headers: { 'Authorization': 'Bearer ' + apiKey }
        })
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = Faceit