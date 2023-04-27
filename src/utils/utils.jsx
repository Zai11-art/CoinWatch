import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export const getCoinData = id => {
  return axios.get(`${BASE_URL}/coins/${id}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
};

export const getCoinDataList = () => {
  return axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&locale=en`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
};