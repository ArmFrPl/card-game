import axios from 'axios/index';

export default axios.create({
  baseURL: 'https://deckofcardsapi.com/api/deck'
})