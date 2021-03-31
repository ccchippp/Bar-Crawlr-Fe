import {API_BASE_URL, YELP_API_KEY} from './config'
import queryString from 'query-string'

// const YELP_KEY = process.env.YELP_API_KEY
// const BASE_URL = process.env.API_BASE_URL

export function get(path, queryParams) {
    const query = queryString.stringify(queryParams)
    return fetch(`${API_BASE_URL}${path}?${query}`, {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
                Origin: 'localhost',
                withCredentials: true,
            }
        })
}

// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY