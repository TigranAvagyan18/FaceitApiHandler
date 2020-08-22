const { default: Axios } = require('axios');

class Faceit {
  constructor(apiKey) {
    this.apiUrl = "https://open.faceit.com/data/v4/";
    this.apiKey = apiKey;
  }
  getPlayerStats = async (nickname, options = { default: {} }) => {
    if (options.default) this.url = `players?nickname=${nickname}`
    if (options.type) {
      this.id = await this.getId(nickname);
      this.url = `players/${this.id}/${options.type.name}`;
      if (options.type.gameName) {
        this.url += `/${options.type.gameName}`;
        console.log(this.url)
      }
    }
    return new Promise(async (resolve, reject) => {
      try {
        const resp = await this.getRequest(this.url);
        resolve(resp);
      } catch (error) {
        console.log(error.config);
        reject(error);
      }
    })
  }
  getPlayerStatsHistory = (id, gameName) => {
    this.url = `players/${id}/history`;
    this.game = { game: gameName }
    return new Promise(async (resolve, reject) => {
      try {
        const resp = await this.getRequest(this.url, this.game);
        resolve(resp);
      } catch (error) {
        console.log(error.config);
        reject(error);
      }
    })
  }
  getPlayerStatsHubs = (id) => {
    this.url = `players/${id}/hubs`;
    return new Promise(async (resolve, reject) => {
      try {
        const resp = await this.getRequest(this.url);
        resolve(resp);
      } catch (error) {
        console.log(error.config);
        reject(error);
      }
    })
  }
  getPlayerStatsByGame = (id, gameName) => {
    this.url = `players/${id}/stats/${gameName}`;
    return new Promise(async (resolve, reject) => {
      try {
        const resp = await this.getRequest(this.url);
        resolve(resp);
      } catch (error) {
        console.log(error.config);
        reject(error);
      }
    })
  }
  getPlayerStatsTournaments = (id) => {
    this.url = `players/${id}/tournaments`;
    return new Promise(async (resolve, reject) => {
      try {
        const resp = await this.getRequest(this.url);
        resolve(resp);
      } catch (error) {
        console.log(error.config);
        reject(error);
      }
    })
  }
  getId = async (nickname) => {
    const resp = await this.getPlayerStats(nickname);
    return resp.player_id;
  }
  getRequest = (url, data = null) => {
    return new Promise(async (resolve, reject) => {
      const apiUrl = this.apiUrl
      const apiKey = this.apiKey;
      try {
        const response = await Axios.get(apiUrl + url, {
          headers: { 'Authorization': 'Bearer ' + apiKey },
          params: data
        })
        resolve(response.data)
      } catch (error) {
        console.log(error.response.status, error.response.statusText)
        reject(error)
      }
    })
  }
}

module.exports = Faceit