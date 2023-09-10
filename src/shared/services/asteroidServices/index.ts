import type { TAsteroidServices } from "./types.ts"
import axios from "axios"

const BASE_URL = "https://api.nasa.gov"
const API_KEY = "bJOYF7XAVbEs0h1yZ8IQg4BU6fi8XYFS0Z1h5fMg"

const asteroidServices: TAsteroidServices = {
  getAsteroids: async (date) => {
    return axios.get(`${BASE_URL}/neo/rest/v1/feed`, {
      params: {
        start_date: date,
        end_date: date,
        api_key: API_KEY,
      }
    }).then(({ data }) => data)
  },
  getAsteroid: async (id) => {
    return axios.get(`${BASE_URL}/neo/rest/v1/neo/${id}`, {
      params: {
        api_key: API_KEY,
      }
    }).then(({ data }) => data)
  }
}

export default asteroidServices