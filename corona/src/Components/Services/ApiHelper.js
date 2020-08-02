import axios from 'axios';

// all api calls

export function getStatsAll(){
  return  axios.get('https://api.covid19api.com/')
}
export function getCountryList(){
    return axios.get('https://api.covid19api.com/countries')
}
export function getPerCountryList(){
    return axios.get('https://api.covid19api.com/countries')
}